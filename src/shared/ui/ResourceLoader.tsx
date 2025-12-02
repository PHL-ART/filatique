"use client";

import { useState, useEffect, ReactNode, createContext, Dispatch, SetStateAction } from 'react';
import { Loader, Center } from '@mantine/core';
import { usePathname } from 'next/navigation';

interface ResourceLoaderProps {
  children: ReactNode;
}

interface ResourceLoaderContextProps {
  modalIsOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const ResoucereLoaderContext = createContext<ResourceLoaderContextProps>({ modalIsOpen: false, setModalOpen: () => { } });

export function ResourceLoader({ children }: ResourceLoaderProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [modalIsOpen, setModalOpen] = useState(false);
  const [previousPathname, setPreviousPathname] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Функция для проверки загрузки всех ресурсов
    const checkResourcesLoaded = () => {
      if (document.readyState === 'complete') {
        // Добавляем небольшую задержку для плавности
        setTimeout(() => {
          setIsLoaded(true);
        }, 300);
      } else {
        window.addEventListener('load', () => {
          setTimeout(() => {
            setIsLoaded(true);
          }, 300);
        });
      }
    };

    checkResourcesLoaded();

    return () => {
      window.removeEventListener('load', checkResourcesLoaded);
    };
  }, []);

  // Отдельный эффект для закрытия модального окна при смене страницы
  useEffect(() => {
    // Инициализируем предыдущий pathname при первой загрузке
    if (previousPathname === null) {
      setPreviousPathname(pathname);
      return;
    }

    // Закрываем модальное окно только если:
    // 1. Страница загружена
    // 2. Модальное окно открыто
    // 3. Произошла реальная смена страницы (не первая загрузка)
    if (isLoaded && modalIsOpen && previousPathname !== pathname) {
      // Закрываем модальное окно с небольшой задержкой после загрузки новой страницы
      const timer = setTimeout(() => {
        setModalOpen(false);
      }, 500); // Увеличиваем задержку, чтобы пользователь успел увидеть новую страницу

      return () => clearTimeout(timer);
    }

    // Обновляем предыдущий pathname
    setPreviousPathname(pathname);
  }, [pathname, isLoaded, modalIsOpen, previousPathname]);

  if (!isLoaded) {
    return (
      <ResoucereLoaderContext.Provider value={{ modalIsOpen, setModalOpen }}>
        <Center style={{ height: '100vh' }}>
          <Loader color="white" size="lg" />
        </Center>
      </ResoucereLoaderContext.Provider>
    );
  }

  return (
    <ResoucereLoaderContext.Provider value={{ modalIsOpen, setModalOpen }}>
      {children}
    </ResoucereLoaderContext.Provider>
  );
}
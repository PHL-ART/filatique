"use client";

import { useState, useEffect, ReactNode } from 'react';
import { Loader, Center } from '@mantine/core';

interface ResourceLoaderProps {
  children: ReactNode;
}

export function ResourceLoader({ children }: ResourceLoaderProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Функция для проверки загрузки всех ресурсов
    const checkResourcesLoaded = () => {
      if (document.readyState === 'complete') {
        // Добавляем небольшую задержку для плавности
        setTimeout(() => setIsLoaded(true), 300);
      } else {
        window.addEventListener('load', () => {
          setTimeout(() => setIsLoaded(true), 300);
        });
      }
    };

    checkResourcesLoaded();

    return () => {
      window.removeEventListener('load', checkResourcesLoaded);
    };
  }, []);

  if (!isLoaded) {
    return (
      <Center style={{ height: '100vh' }}>
        <Loader color="white" size="lg" />
      </Center>
    );
  }

  return <>{children}</>;
}
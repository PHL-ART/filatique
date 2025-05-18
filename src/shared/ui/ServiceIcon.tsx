"use client";

import { FC } from 'react';
import { Image, Box } from '@mantine/core';
import {
    IconBrandSpotify,
    IconBrandApple,
    IconBrandYoutube,
    IconBrandSoundcloud,
    IconBrandBandcamp,
    IconBrandDeezer,
    IconBrandVk,
    IconMusic,
    IconBrandTidal
} from '@tabler/icons-react';
import classes from './ServiceIcon.module.css';

interface ServiceIconProps {
    service: string;
    size?: number;
    className?: string;
}

export const ServiceIcon: FC<ServiceIconProps> = ({
    service,
    size = 36,
    className
}) => {
    // Нормализуем имя сервиса (приводим к нижнему регистру)
    const normalizedName = service.toLowerCase();

    // Функция для рендеринга иконки в зависимости от сервиса
    const renderIcon = () => {
        // Маппинг сервисов на компоненты иконок из tabler-icons
        switch (normalizedName) {
            case 'spotify':
                return <IconBrandSpotify size={size} stroke={1.5} />;
            case 'applemusic':
                return <IconBrandApple size={size} stroke={1.5} />;
            case 'youtube':
            case 'youtubemusic':
                return <IconBrandYoutube size={size} stroke={1.5} />;
            case 'soundcloud':
                return <IconBrandSoundcloud size={size} stroke={1.5} />;
            case 'bandcamp':
                return <IconBrandBandcamp size={size} stroke={1.5} />;
            case 'deezer':
                return <IconBrandDeezer size={size} stroke={1.5} />;
            case 'vk':
                return <IconBrandVk size={size} stroke={1.5} />;
            default:
                // Проверяем, есть ли у нас SVG-файл для этого сервиса
                if (hasSvgFile(normalizedName)) {
                    return (
                        <Image
                            src={getSvgPath(normalizedName)}
                            width={size}
                            height={size}
                            alt={service}
                            title={service}
                            className={classes.icon}
                        />
                    );
                }
                // Если нет ни иконки, ни SVG-файла, используем иконку по умолчанию
                return <IconMusic size={size} stroke={1.5} />;
        }
    };

    // Проверяем, есть ли SVG-файл для данного сервиса
    const hasSvgFile = (serviceName: string): boolean => {
        // Список сервисов, для которых у нас есть SVG-файлы
        const svgServices = [
            'yandexmusic',
            'zvuk'
            // Добавьте другие сервисы, для которых есть SVG-файлы
        ];

        return svgServices.includes(serviceName);
    };

    // Получаем путь к SVG-файлу
    const getSvgPath = (serviceName: string): string => {
        // Маппинг сервисов на пути к SVG-файлам
        const svgMap: Record<string, string> = {
            'yandexmusic': '/assets/icons/services/yandex-music.svg',
            'zvuk': '/assets/icons/services/zvuk.svg',
            // Добавьте другие сервисы по необходимости
        };

        return svgMap[serviceName] || '/assets/icons/services/default.svg';
    };

    return (
        <Box className={`${classes.iconContainer} ${className || ''}`}>
            {renderIcon()}
        </Box>
    );
};
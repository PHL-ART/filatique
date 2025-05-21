"use client";

import { useState, useEffect } from 'react';
import { Container, Flex } from '@mantine/core';
import { PressElement } from './PressElement';
import { Index } from '@model/index';
import { apiFetch } from '@shared/api/fetcher';

export function PressList() {
    const [indexes, setIndexes] = useState<Index[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchIndexes = async () => {
            try {
                const data = await apiFetch<Index[]>('/api/press');
                setIndexes(data);
            } catch (err) {
                setError('Не удалось загрузить прессу. Пожалуйста, попробуйте позже.');
                console.error('Ошибка:', err);
            }
        };

        fetchIndexes();
    }, []);

    if (error || indexes.length === 0) {
        return null
    }

    return (
        <Container fluid size="lg" p={0}>
            <Flex direction={'column'} gap={"xl"}>
                {!!indexes.length && indexes.map((index) => (
                    <PressElement key={index.id} index={index} />
                ))}
            </Flex>
        </Container>
    );
}
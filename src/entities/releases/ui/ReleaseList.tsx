"use client";

import { useState, useEffect } from 'react';
import { SimpleGrid, Text, Container, Title, Group, Anchor, Box, Space } from '@mantine/core';
import { ReleaseCard } from './ReleaseCard';
import { Release } from '@model/index';
import { apiFetch } from '@shared/api/fetcher';
import classes from './ReleaseList.module.css';

export function ReleaseList() {
    const [releases, setReleases] = useState<Release[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchReleases = async () => {
            try {
                const data = await apiFetch<Release[]>('/api/releases');
                setReleases(data);
            } catch (err) {
                setError('Не удалось загрузить релизы. Пожалуйста, попробуйте позже.');
                console.error('Ошибка:', err);
            }
        };

        fetchReleases();
    }, []);

    // Разделение релизов на категории
    const regularReleases = releases.filter(release =>
        release.type === 'ALBUM' || release.type === 'SINGLE'
    );

    const mixes = releases.filter(release =>
        release.type === 'MIX'
    );

    if (error || releases.length === 0) {
        return null;
    }

    return (
        <Container fluid className={classes.container}>
            {regularReleases.length > 0 && (
                <Box
                    id="releases"
                    mb="xl"
                    style={{ scrollMarginTop: '100px', paddingInline: '0.25rem' }}
                >
                    <Title order={2} mb="md" className={classes.sectionTitle}>Releases</Title>
                    <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="xl" verticalSpacing="xl">
                        {regularReleases.map((release) => (
                            <ReleaseCard key={release.id} release={release} />
                        ))}
                    </SimpleGrid>
                </Box>
            )}

            {mixes.length > 0 && (
                <Box id="mixes" mt="xl" style={{ scrollMarginTop: '100px' }}>
                    <Title order={2} mb="md" className={classes.sectionTitle}>Mixes</Title>
                    <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="xl" verticalSpacing="xl">
                        {mixes.map((release) => (
                            <ReleaseCard key={release.id} release={release} />
                        ))}
                    </SimpleGrid>
                </Box>
            )}
        </Container>
    );
}

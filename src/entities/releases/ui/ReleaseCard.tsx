"use client";

import { useState } from 'react';
import { Card, Image, Box, Title } from '@mantine/core';
import { Release } from '@model/index';
import { ReleaseModal } from './ReleaseModal';
import classes from './ReleaseCard.module.css';

interface ReleaseCardProps {
    release: Release;
}

export function ReleaseCard({ release }: ReleaseCardProps) {
    const [opened, setOpened] = useState(false);

    const getReleaseYear = () => {
        const date = new Date(release.dateReleased);
        return date.getFullYear();
    }

    const handleCardClick = () => {
        setOpened(true);
    };

    return (
        <>
            <Card
                shadow="sm"
                padding="0"
                radius="md"
                className={classes.releaseCard}
                onClick={handleCardClick}
            >
                <Card.Section className={classes.imageContainer}>
                    <Image
                        src={release.imageURL}
                        alt={release.title}
                        className={classes.coverImage}
                    />
                </Card.Section>

                <Box className={classes.titleContainer}>
                    <Title order={3} className={classes.releaseTitle}>
                        {release.title}
                    </Title>
                    <Title order={4}  className={classes.releaseYear}>
                        {getReleaseYear()}
                    </Title>
                </Box>
            </Card>

            <ReleaseModal
                release={release}
                opened={opened}
                onClose={() => setOpened(false)}
            />
        </>
    );
}
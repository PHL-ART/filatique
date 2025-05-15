"use client";

import { useState } from 'react';
import { Card, Image, Text, Group, Modal, Box, Title } from '@mantine/core';
import NextLink from 'next/link';
import { Release } from '@model/index';
import classes from './ReleaseCard.module.css';

interface ReleaseCardProps {
    release: Release;
}

export function ReleaseCard({ release }: ReleaseCardProps) {
    const [opened, setOpened] = useState(false);

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
                </Box>
            </Card>

            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                centered
                size="xl"
                withCloseButton={false}
                classNames={{
                    content: classes.modalContent,
                    body: classes.modalBody,
                    overlay: classes.modalOverlay
                }}
            >
                <Box className={classes.modalContainer}>
                    {/* Левая колонка с описанием */}
                    <Box className={classes.modalInfoColumn}>
                        <Title order={2} className={classes.modalTitle}>
                            {release.title}
                        </Title>

                        <Text size="md" className={classes.modalDescription}>
                            {release.descriptionRu}
                        </Text>

                        <Text size="sm" className={classes.modalDate}>
                            {new Date(release.dateReleased).toLocaleDateString('ru-RU')}
                        </Text>
                    </Box>

                    {/* Правая колонка со ссылками */}
                    {release.listenLinks && release.listenLinks.length > 0 && (
                        <Box className={classes.modalLinksColumn}>
                            <Title order={4} className={classes.listenLinksTitle}>
                                Слушать:
                            </Title>
                            <Box className={classes.listenLinks}>
                                {release.listenLinks.map((link) => (
                                    <NextLink
                                        key={link.id}
                                        href={link.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={classes.listenLink}
                                    >
                                        <Box className={classes.serviceIconContainer}>
                                            <Image
                                                src={'/static/icons/' + link.service.name}
                                                width={36}
                                                height={36}
                                                alt={link.service.name}
                                                title={link.service.name}
                                                className={classes.serviceIcon}
                                            />
                                            <Text className={classes.serviceName}>
                                                {link.service.name}
                                            </Text>
                                        </Box>
                                    </NextLink>
                                ))}
                            </Box>
                        </Box>
                    )}
                </Box>
            </Modal>
        </>
    );
}
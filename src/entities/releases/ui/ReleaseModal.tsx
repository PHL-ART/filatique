"use client";

import { FC } from 'react';
import { Text, Modal, Box, Title } from '@mantine/core';
import NextLink from 'next/link';
import { Release } from '@model/index';
import { ServiceIcon } from '@shared/ui/ServiceIcon';
import classes from './ReleaseModal.module.css';

interface ReleaseModalProps {
    release: Release;
    opened: boolean;
    onClose: () => void;
}

export const ReleaseModal: FC<ReleaseModalProps> = ({ 
    release, 
    opened, 
    onClose 
}) => {
    return (
        <Modal
            opened={opened}
            onClose={onClose}
            centered
            size="auto"
            withCloseButton={true}
            classNames={{
                content: classes.modalContent,
                body: classes.modalBody,
                overlay: classes.modalOverlay,
                close: classes.modalCloseButton
            }}
        >
            <Box className={classes.modalContainer}>
                <Box className={classes.modalInfoColumn}>
                    <Title order={2} className={classes.modalTitle}>
                        {release.title}
                    </Title>

                    <Title order={4} className={classes.modalDate}>
                        {new Date(release.dateReleased).getFullYear()}
                    </Title>

                    <Text size="md" className={classes.modalDescription}>
                        {release.descriptionRu}
                    </Text>


                </Box>

                {release.listenLinks && release.listenLinks.length > 0 && (
                    <Box className={classes.modalLinksColumn}>
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
                                        <ServiceIcon
                                            service={link.service.name}
                                            size={36}
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
    );
};
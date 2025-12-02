import { FC, useContext, useEffect } from 'react';
import { Modal, Flex } from '@mantine/core';
import Link from 'next/link';
import { IconX } from '@tabler/icons-react';
import { usePathname } from 'next/navigation';
import classes from './MobileMenuModal.module.css';
import { ResoucereLoaderContext } from './ResourceLoader';

interface MobileMenuModalProps {
    opened: boolean;
    onClose: () => void;
}

const MobileMenuModal: FC<MobileMenuModalProps> = ({
    opened,
    onClose,
}) => {
    const { modalIsOpen, setModalOpen } = useContext(ResoucereLoaderContext);
    const currentPathname = usePathname();

    useEffect(() => {
        setModalOpen(opened);
    }, [opened, setModalOpen]);

    // Функция для определения активной ссылки
    const getLinkClassName = (path: string) => {
        return currentPathname === path 
            ? `${classes.link} ${classes.activeLink}` 
            : classes.link;
    };

    // Функция для обработки клика на ссылку
    // Модальное окно будет закрыто автоматически ResourceLoader'ом после загрузки новой страницы
    const handleLinkClick = () => {
        // Не закрываем модальное окно сразу, позволяем ResourceLoader управлять этим
        // onClose() будет вызван автоматически после загрузки новой страницы
    };

    return (
        <Modal
            opened={opened}
            onClose={onClose}
            centered
            size="xl"
            withCloseButton={false}
            classNames={{
                content: classes.modalContent,
                body: classes.modalBody,
                overlay: classes.modalOverlay,
                inner: classes.modalInner
            }}
        >
            <Flex
                gap="lg"
                justify="center"
                align="center"
                direction="column"
                wrap="nowrap"
                h="100%"
            >
                <Flex
                    gap="lg"
                    justify="center"
                    align="center"
                    direction="column"
                    wrap="nowrap"
                    flex-grow={1}
                    h="100%"
                >
                    {currentPathname !== '/' && (
                        <Link
                            href="/"
                            className={getLinkClassName('/')}
                            onClick={handleLinkClick}
                        >
                            HOME
                        </Link>
                    )}
                    <Link 
                        href="/listen" 
                        className={getLinkClassName('/listen')}
                        onClick={handleLinkClick}
                    >
                        Listen
                    </Link>
                    <Link 
                        href="/press" 
                        className={getLinkClassName('/press')}
                        onClick={handleLinkClick}
                    >
                        Press
                    </Link>
                    <Link 
                        href="/info" 
                        className={getLinkClassName('/info')}
                        onClick={handleLinkClick}
                    >
                        Info
                    </Link>
                </Flex>
                <div className={classes.closeButton} onClick={onClose}>
                    <IconX size={24} color="white" />
                </div>
            </Flex>
        </Modal>
    );
};

export default MobileMenuModal;
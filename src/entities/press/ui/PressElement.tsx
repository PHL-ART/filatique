"use client";


import { Box, Flex } from '@mantine/core';
import { Index } from '@model/index';
import classes from './PressElement.module.css';
import Link from 'next/link';

interface PressElementProps {
    index: Index;
}

export function PressElement({ index }: PressElementProps) {

    return (
        <Flex
            mih={50}
            justify="space-between"
            align="center"
            direction="row"
            wrap="nowrap"
            className={classes.pressContainer}>
            <Box >
                {String(index.year)}
            </Box>
            <Box >
                {index.title}
            </Box>

            <Link href={index.link}>
                <Box className={classes.pressLink}>
                    {index.publisher}
                </Box>
            </Link>
        </Flex>
    );
}
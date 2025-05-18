"use client";


import { Box, Container, Flex, Grid } from '@mantine/core';
import { Index } from '@model/index';
import classes from './PressElement.module.css';
import Link from 'next/link';

interface PressElementProps {
    index: Index;
}

export function PressElement({ index }: PressElementProps) {

    return (
        <Container w={"100%"}>
            <Grid className={classes.pressContainer}>
                <Grid.Col span={1} className={classes.pressYear}>{String(index.year)}</Grid.Col>
                <Grid.Col span={8} className={classes.pressTitle}>{index.title}</Grid.Col>
                <Grid.Col span={3}>
                    <Link href={index.link} className={classes.pressLink}>
                        {index.publisher}
                    </Link>
                </Grid.Col>
            </Grid>
        </Container>
    );
}
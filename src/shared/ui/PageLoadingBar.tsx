"use client";

import { useEffect, useState } from 'react';
import { Progress } from '@mantine/core';
import { useLoadingStore } from '@shared/store/loading';
import classes from './PageLoadingBar.module.css';

export function PageLoadingBar() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const isLoading = useLoadingStore((state) => state.isLoading);

  useEffect(() => {
    if (isLoading) {
      setVisible(true);
      setProgress(10);
      const timer1 = setTimeout(() => setProgress(30), 100);
      const timer2 = setTimeout(() => setProgress(50), 300);
      const timer3 = setTimeout(() => setProgress(70), 600);
      const timer4 = setTimeout(() => setProgress(90), 1000);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
      };
    } else {
      if (visible) {
        setProgress(100);
        const hideTimer = setTimeout(() => setVisible(false), 500);
        return () => clearTimeout(hideTimer);
      }
    }
  }, [isLoading, visible]);
  
  if (!visible) return null;
  
  return (
    <div className={classes.loadingBarContainer}>
      <Progress 
        value={progress} 
        size="xs" 
        color="white" 
        className={classes.loadingBar} 
        striped
        animated
      />
    </div>
  );
}
import { create } from 'zustand';

interface LoadingState {
    isLoading: boolean;
    isPageTransitioning: boolean;
    setLoading: (isLoading: boolean) => void;
    startLoading: () => void;
    stopLoading: () => void;
    startPageTransition: () => void;
    stopPageTransition: () => void;
}

export const useLoadingStore = create<LoadingState>((set) => ({
    isLoading: false,
    isPageTransitioning: false,
    setLoading: (isLoading) => set({ isLoading }),
    startLoading: () => set({ isLoading: true }),
    stopLoading: () => set({ isLoading: false }),
    startPageTransition: () => set({ isPageTransitioning: true }),
    stopPageTransition: () => set({ isPageTransitioning: false }),
}));
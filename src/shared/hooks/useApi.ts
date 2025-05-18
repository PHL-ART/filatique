import { useState, useEffect } from 'react';
import { apiFetch } from '@shared/api/fetcher';

interface UseApiOptions<T> {
    url: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: any;
    initialData?: T;
    onSuccess?: (data: T) => void;
    onError?: (error: Error) => void;
    skip?: boolean;
}

export function useApi<T>({
    url,
    method = 'GET',
    body,
    initialData,
    onSuccess,
    onError,
    skip = false,
}: UseApiOptions<T>) {
    const [data, setData] = useState<T | undefined>(initialData);
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        if (skip) return;

        setIsLoading(true);

        try {
            const options: RequestInit = {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            if (body) {
                options.body = JSON.stringify(body);
            }

            const result = await apiFetch<T>(url, options);
            setData(result);
            onSuccess?.(result);
        } catch (err) {
            const error = err instanceof Error ? err : new Error(String(err));
            setError(error);
            onError?.(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [url, skip]);

    return {
        data,
        error,
        isLoading,
        refetch: fetchData,
    };
}
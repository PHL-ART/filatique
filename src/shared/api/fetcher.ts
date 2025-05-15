import { useLoadingStore } from '@shared/store/loading';

export async function apiFetch<T>(url: string, options?: RequestInit): Promise<T> {
  const { startLoading, stopLoading } = useLoadingStore.getState();
  
  try {
    startLoading();
    const response = await fetch(url, options);
    
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    
    return await response.json() as T;
  } catch (error) {
    console.error('Ошибка API-запроса:', error);
    throw error;
  } finally {
    stopLoading();
  }
}
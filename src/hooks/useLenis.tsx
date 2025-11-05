import { useEffect } from 'react';

export function useLenis() {
    useEffect(() => {
        // Simple smooth scrolling behavior
        document.documentElement.style.scrollBehavior = 'smooth';

        return () => {
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);
}

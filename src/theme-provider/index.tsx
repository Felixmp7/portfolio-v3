'use client';

import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

interface IProps {
    children: React.ReactNode
}

export const AppThemeProvider = ({ children }: IProps) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return children;
    }

    return (
        <ThemeProvider attribute='class'>{children}</ThemeProvider>
    );
};

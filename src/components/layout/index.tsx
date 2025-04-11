'use client';
import { PropsWithChildren } from "react";

import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/navigation/Navbar';
import { AppThemeProvider } from '@/providers/ThemeProvider';

export const Layout = ({ children }:PropsWithChildren) => (
    <AppThemeProvider>
        <main className="container container-bg">
            <Navbar />
            {children}
            <Footer className="mt-10" />
        </main>
    </AppThemeProvider>
);
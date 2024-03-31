'use client';
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/navigation/Navbar';
import { NAVIGATION } from '@/constants';
import { AppThemeProvider } from '@/providers/ThemeProvider';

export const Layout = ({ children }:PropsWithChildren) => {
    const pathname = usePathname();
    const isTestsPath = pathname === NAVIGATION.tests;

    const mainClasses = clsx({
        'container container-bg': true,
        'relative md:h-screen': isTestsPath
    });

    const footerClasses = clsx({
        'mt-10': !isTestsPath,
        'mt-10 md:mt-0 md:absolute px-10 bottom-0 inset-x-0': isTestsPath
    });
    return (
        <AppThemeProvider>
            <main className={mainClasses}>
                <Navbar />
                {children}
                <Footer className={footerClasses} />
            </main>
        </AppThemeProvider>
    );
};
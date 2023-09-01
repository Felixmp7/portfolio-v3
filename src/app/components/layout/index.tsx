'use client';

import { AppThemeProvider } from '@/app/theme-provider';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";
import { NAVIGATION } from "src/constants";

export const Layout = ({ children }:PropsWithChildren) => {
    const pathname = usePathname();
    const isTestsPath = pathname === NAVIGATION.tests;

    const mainClasses = clsx({
        'container container-bg': true,
        'relative h-screen': isTestsPath
    });

    const footerClasses = clsx({
        'mt-10': !isTestsPath,
        'absolute px-10 bottom-0 inset-x-0': isTestsPath
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
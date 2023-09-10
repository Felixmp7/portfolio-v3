'use client';

import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/navigation/Navbar';
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";
import { NAVIGATION } from "src/constants";
import { AppThemeProvider } from 'src/theme-provider';

export const Layout = ({ children }:PropsWithChildren) => {
    const pathname = usePathname();
    const isTestsPath = pathname === NAVIGATION.tests;

    const mainClasses = clsx({
        'container container-bg': true,
        'relative lg:h-screen': isTestsPath
    });

    const footerClasses = clsx({
        'mt-10': !isTestsPath,
        'mt-10 lg:mt-0 lg:absolute px-10 bottom-0 inset-x-0': isTestsPath
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
'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVIGATION } from 'src/constants';

export const NavbarItems = () => {
    const pathname = usePathname();

    const getActiveClassName = (href: string, color: string) => clsx({
        [color]: pathname.includes(href)
    });

    return (
        <>
            <li className={clsx("duration-150 ease-in hover:text-pink-600", getActiveClassName(NAVIGATION.about, 'text-pink-600'))}
            >
                <Link href={NAVIGATION.about}>About</Link>
            </li>
            <li className={clsx("duration-150 ease-in hover:text-blue-600", getActiveClassName(NAVIGATION.projects, 'text-blue-600'))}>
                <Link href={NAVIGATION.projects}>Projects</Link>
            </li>
            <li className={clsx("duration-150 ease-in hover:text-yellow-600", getActiveClassName(NAVIGATION.reviews, 'text-yellow-600'))}>
                <Link href={NAVIGATION.reviews}>Reviews</Link>
            </li>
            <li className={clsx("duration-150 ease-in hover:text-green-600", getActiveClassName(NAVIGATION.tests, 'text-green-600'))}>
                <Link href={NAVIGATION.tests}>Tests</Link>
            </li>
        </>
    );
};
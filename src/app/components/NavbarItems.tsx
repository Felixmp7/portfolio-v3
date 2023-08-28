'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
    {
        id: 1,
        label: "About",
        href: "/about",
        color: 'text-pink-600'
    },
    {
        id: 2,
        label: "Projects",
        href: "/projects",
        color: 'text-blue-500'
    },
    {
        id: 3,
        label: "Reviews",
        href: "/reviews",
        color: 'text-yellow-600'
    },
    {
        id: 4,
        label: "Tests",
        href: "/tests",
        color: 'text-green-600'
    }
];


export const NavbarItems = () => {
    const pathname = usePathname();

    return (
        <>
            {navigation.map(({ id, color, href, label }) => {
                const classNames = clsx({
                    'duration-150 ease-in': true,
                    [`hover:${color}`]: true,
                    [color]: pathname.includes(href)
                });
                return (
                    <li key={id} className={classNames}>
                        <Link href={href}>{label}</Link>
                    </li>
                );
            })}
        </>
    );
};
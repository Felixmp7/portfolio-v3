'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NAVIGATION } from 'src/constants';

export const NavbarItems = () => {
    const pathname = usePathname();
    const links = Object.entries(NAVIGATION).filter(([key]) => key !== 'home');

    const isActive = (href: string) => pathname.includes(href);

    return (
        <>
            {links.map(([key, link]) => (
                <li key={key} data-active={isActive(link)} className="capitalize data-[active=true]:text-indigo-500 duration-150 ease-in hover:text-indigo-500"
                >
                    <Link href={link}>{key}</Link>
                </li>
            ))}
        </>
    );
};
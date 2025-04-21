'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { getLinksArray } from '@/utils';

export const NavbarItems = () => {
    const pathname = usePathname();
    const links = getLinksArray();

    const isActive = (href: string) => pathname.includes(href);

    return (
        <>
            {links.map(([key, link]) => (
                <li key={key} data-active={isActive(link)} className="capitalize data-[active=true]:text-sky-500 duration-150 ease-in hover:text-sky-500"
                >
                    <Link href={link}>{key}</Link>
                </li>
            ))}
        </>
    );
};
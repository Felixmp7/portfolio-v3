'use client';

import { BurguerMenu } from '@/components/BurguerMenu';
import { NavbarItems } from '@/components/NavbarItems';
import clsx from 'clsx';
import { useTheme } from "next-themes";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoMoon, IoSunnyOutline } from 'react-icons/io5';
import { NAVIGATION } from 'src/constants';

export const Navbar = () => {
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();
    const isDarkTheme = theme === "dark";

    const isHomePath = pathname === NAVIGATION.home;
    const navClasses = clsx({
        'flex items-center text-sm font-normal' : true,
        'gap-2 sm:gap-5 justify-end' : isHomePath,
        'gap-2 justify-end sm:gap-0 sm:justify-between' : !isHomePath
    });
    const avatarTranslatedClasses = clsx({ 'hidden': isHomePath });

    const handleToggleTheme = () => isDarkTheme ? setTheme('light'): setTheme("dark");

    return (
        <header className='pt-10'>
            <nav className={navClasses}>
                <Link href={NAVIGATION.home} className={avatarTranslatedClasses}>
                    <Image
                        priority
                        src="/assets/me/profile.jpeg"
                        alt="Felix Pacheco Avatar"
                        className='rounded-full shadow-md'
                        width={48}
                        height={48}
                    />
                </Link>
                <ul className="hidden sm:flex gap-8 px-8 py-3 shadow-md dark:border-none border-[0.5px] dark:bg-zinc-700 rounded-3xl">
                    <NavbarItems />
                </ul>
                <BurguerMenu />
                <button onClick={handleToggleTheme} className='px-4 py-3 text-2xl dark:text-inherit text-yellow-500 bg-yellow-50 duration-150 ease-in rounded-full dark:bg-zinc-700 dark:hover:text-white shadow-md dark:border-none border-[0.5px] border-yellow-300'>
                    {isDarkTheme ? <IoMoon /> :<IoSunnyOutline />}
                </button>
            </nav>
        </header>

    );
};

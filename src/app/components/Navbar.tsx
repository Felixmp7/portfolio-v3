'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { IoSunnyOutline } from 'react-icons/io5';

export const Navbar = () => {
    const pathname = usePathname();
    const isHomePath = pathname === '/';
    const navClasses = clsx({
        'flex items-center px-8 mt-10 text-sm font-normal text-gray-300' : true,
        'gap-5 justify-end' : isHomePath,
        'justify-between' : !isHomePath
    });
    const avatarTranslatedClasses = clsx({'hidden': isHomePath});
    return (
        <header className='container relative mx-auto'>
            <nav className={navClasses}>
                <Link href="/" className={avatarTranslatedClasses}>
                    <Image
                        priority
                        src="/profile.jpeg"
                        alt="Felix Pacheco Avatar"
                        className='rounded-full'
                        width={40}
                        height={40}
                    />
                </Link>
                <ul className="flex gap-8 px-8 py-3 bg-zinc-800 rounded-3xl">
                    <li className="duration-150 ease-in hover:text-pink-600">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="duration-150 ease-in hover:text-pink-600">
                        <Link href="/projects">Projects</Link>
                    </li>
                    <li className="duration-150 ease-in hover:text-pink-600">
                        <Link href="/contact">Reviews</Link>
                    </li>
                    <li className="duration-150 ease-in hover:text-pink-600">
                        <Link href="/tests">Tests</Link>
                    </li>
                </ul>
                <button className='px-4 py-3 text-2xl text-gray-500 duration-150 ease-in rounded-full bg-zinc-800 hover:text-cyan-400'>
                    <IoSunnyOutline />
                </button>
            </nav>
        </header>

    );
};

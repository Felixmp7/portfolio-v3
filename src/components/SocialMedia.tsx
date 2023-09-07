'use client';
import Link from 'next/link';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

export const SocialMedia = () => {
    return (
        <ul className='inline-flex items-center text-2xl gap-x-3'>
            <li className='hover:text-blue-500'>
                <Link href="https://www.linkedin.com/in/felix-pacheco-30/" target='_blank'>
                    <IoLogoLinkedin />
                </Link>
            </li>
            <li className='hover:text-black dark:hover:text-white'>
                <Link href="https://github.com/Felixmp7" target='_blank'>
                    <IoLogoGithub />
                </Link>
            </li>
        </ul>

    );
};

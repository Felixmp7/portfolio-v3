'use client';

import Image from 'next/image';
import clsx from 'clsx';
import { useEffect, useState } from 'react';


export default function Home() {
    const [mounted, setMounted] = useState(false);

    const avatarHeader = clsx({
        'rounded-full': true,
        'relative duration-300 ease-out translate-y-20': mounted
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <main>
            <header className='container relative mx-auto'>
                <Image
                    priority
                    src="/profile.jpeg"
                    alt="Felix Pacheco Avatar"
                    className={avatarHeader}
                    width={80}
                    height={80}
                />
            </header>
        </main>
    );
}

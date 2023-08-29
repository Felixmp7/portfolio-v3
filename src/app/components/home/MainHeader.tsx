import { SocialMedia } from '@/components/SocialMedia';
import { Laptop3D } from '@/components/home/3DLaptop';
import Image from 'next/image';


export const MainHeader = () => (
    <header className='xl:grid xl:grid-cols-2'>
        <div>
            <Image
                priority
                src="/assets/me/profile.jpeg"
                alt="Felix Pacheco Avatar"
                className="rounded-full"
                width={80}
                height={80}
            />
            <h1 className='my-4 text-3xl font-semibold select-none md:my-8 md:text-5xl'>
                Systems <span className='text-yellow-500 hover:underline'>engineer</span>,
                <br /> <span className='text-cyan-400 hover:underline'>react</span> developer, and <br /> amateur soccer <span className='text-green-500 hover:underline'>player</span>.</h1>
            <p className='max-w-md leading-5 md:max-w-xl md:leading-7 dark:text-zinc-400'>
                Hello, I&apos;m Felix, a Systems Engineer from Caracas, Venezuela. I&apos;m 26 years old and I have been working as a React Developer since 2019.
            </p>
            <div className='mt-8'>
                <SocialMedia />
            </div>
        </div>
        <Laptop3D />
    </header>
);

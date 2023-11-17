'use client';

import { CTA } from '@/components/CTA';
import { HeadTitle } from '@/components/HeadTitle';
import { SocialMedia } from '@/components/SocialMedia';
import Spinner from "@/components/Spinner";
import Image from 'next/image';
import { lazy, Suspense } from 'react';
import { getAge } from 'src/utils';
const Spline = lazy(() => import('@splinetool/react-spline'));


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
            <HeadTitle
                description={`
                    Hello, I'm Felix, a Systems Engineer from Caracas, Venezuela. I'm ${getAge()} years old and I have been working as a React Developer since 2019.
                `}
                title={(
                    <>
                        Systems <span className='text-yellow-500 hover:underline'>engineer</span>,
                        <br /> <span className='text-cyan-400 hover:underline'>react</span> developer, and <br /> amateur soccer <span className='text-green-500 hover:underline'>player</span>.
                    </>
                )}
                classNames={{
                    title: "my-4 md:my-8"
                }}
            />
            <div className='inline-flex items-center gap-3 mt-8'>
                <SocialMedia />
                <CTA />
            </div>
        </div>
        <div className='grid mt-10 overflow-hidden h-72 xl:h-auto rounded-xl place-content-center'>
            <Suspense fallback={(<Spinner />)}>
                <Spline scene="https://prod.spline.design/FFs-WdvYFpj7feEm/scene.splinecode"  />
            </Suspense>
        </div>
    </header>
);

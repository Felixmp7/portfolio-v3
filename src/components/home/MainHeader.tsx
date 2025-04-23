import Image from 'next/image';

import FortniteSkin from '@/assets/images/fortnite-skin-3.webp';
import { CTA } from '@/components/CTA';
import { HeadTitle } from '@/components/HeadTitle';
import { SocialMedia } from '@/components/SocialMedia';
import { getAge } from '@/utils';


export const MainHeader = () => (
    <header className='flex items-center justify-between gap-10'>
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
                title={(
                    <>
                        Systems <span className='text-yellow-500 hover:underline'>engineer</span>,
                        <br /> <span className='text-cyan-400 hover:underline'>react</span> developer, and <br /> amateur soccer <span className='text-green-500 hover:underline'>player</span>.
                    </>
                )}
                description={`Hello, I'm Felix, a Systems Engineer from Caracas, Venezuela. I'm ${getAge()} years old and I have been working as a React Developer since 2019.`}
                classNames={{ title: "my-4 md:my-8" }}
            />
            <div className='inline-flex items-center gap-3 mt-8'>
                <SocialMedia />
                <CTA />
            </div>
        </div>
        <Image
            priority
            src={FortniteSkin}
            alt="Fortnite Skin"
            className='hidden mr-8 rounded-full lg:block'
            width={400}
            height={400}
        />
    </header>
);

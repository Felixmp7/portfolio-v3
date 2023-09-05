import { SocialMedia } from '@/components/SocialMedia';
import { Laptop3D } from '@/components/home/3DLaptop';
import Image from 'next/image';
import { getAge } from 'src/utils';
import { HeadTitle } from '../HeadTitle';


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
            <div className='mt-8'>
                <SocialMedia />
            </div>
        </div>
        <Laptop3D />
    </header>
);
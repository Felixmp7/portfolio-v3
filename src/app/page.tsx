/* eslint-disable max-len */
import { LatestWork } from '@/components/home/latest-work/LatestWork';
import { MainHeader } from '@/components/home/MainHeader';
import { MainRowImages } from '@/components/home/MainRowImages';
import { MainStack } from '@/components/home/MainStack';

export const dynamic = 'force-dynamic';

export default function Home() {
    return (
        <section>
            <MainHeader />
            <section className='grid grid-cols-2 gap-4 mt-12 md:gap-10 md:mt-16 md:grid-cols-4 h-80 xl:scale-105 md:h-60 lg:h-80'>
                <MainRowImages />
            </section>
            <div className='w-full h-[2px] my-8 md:mt-20 md:mb-10 bg-neutral-300 dark:bg-neutral-700' />
            <section>
                <h2 className='text-3xl font-medium select-none md:text-5xl'>Main <strong className='font-extrabold hover:underline'>Stack</strong></h2>
                <div className='mt-0 sm:mt-10 md:grid md:grid-cols-2 md:gap-16'>
                    <MainStack />
                    <LatestWork />
                </div>
            </section>
        </section>
    );
}

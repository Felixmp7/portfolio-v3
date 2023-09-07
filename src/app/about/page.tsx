/* eslint-disable max-len */
import { CTA } from "@/components/CTA";
import { HeadTitle } from "@/components/HeadTitle";
import Image from "next/image";
import { getAge } from "src/utils";

export default function About() {
    return (
        <div className="grid gap-10 pt-10 select-none xl:pt-24 xl:grid-cols-2">
            <section className="border-2 rounded-lg xl:relative dark:border-zinc-700">
                <Image
                    priority
                    src="/assets/me/me.jpeg"
                    className="mx-auto rounded-lg xl:relative xl:-left-4 xl:-top-4 xl:mx-0"
                    alt="Felix Pacheco Avatar"
                    draggable="false"
                    width={350}
                    height={800}
                />
                <Image
                    priority
                    src="/assets/mountain.jpeg"
                    className="hidden rounded-lg xl:inline-block xl:absolute xl:-bottom-4 xl:-right-4"
                    alt="Felix Pacheco Avatar"
                    draggable="false"
                    width={460}
                    height={460}
                />
            </section>
            <section>
                <HeadTitle
                    classNames={{ title: 'md:text-right' }}
                    title={(
                        <>
                            I&apos;m Felix. <br /> A System&apos;s Engineer <br /> from Caracas,
                            <span className="text-yellow-500 dark:text-yellow-600"> Ven<span className="text-blue-500 dark:text-blue-600">ezu<span className="text-red-500 dark:text-red-600">ela</span></span></span>.
                        </>
                    )}
                />
                <div className="xl:pl-5 dark:text-gray-400 text-[14.5px]">
                    <p className="mt-5">
                        {`
                            I am ${getAge()} years old and have been working as a React Developer since 2019. I would describe myself as honest, detail-oriented, responsible, and active in terms of work. I take pride in doing things well.
                        `}
                    </p>
                    <br />
                    <p>
                        I consider myself a person who never gives up. I always try to overcome obstacles and stand out from others. I am always eager to help, support, and learn from my coworkers, to continue growing as a professional and as a human being.
                        <br />
                        <br />
                        I started a bit later in the programming world, at the age of 23. I worked with some amazing young people, aged between 17 and 20 years old, who knew a lot more than me. This became my main motivation to learn more and more about software development, web development, and the connections between different entities.
                        <br />
                        <br />
                        I studied architecture for one semester in college, as I always wanted to create things that people could use. However, I realized that I was in the wrong career and switched to System&apos;s Engineering.
                        <br />
                        <br />
                        I have had the good fortune of working with some amazing professionals who have pushed my skills to the next level.
                        <br />
                        <br />
                        Today, I consider myself someone who always tries to do things as well as I can. I read a lot of articles on good practices and best patterns in the current year. I also understand why we need to take care or avoid certain patterns or structures that may seem harmless but significantly affect the performance of our applications. I am a big fan of Midudev&apos;s work and have tried his tips, seen his courses, and more.
                        <br />
                        <br />
                        A curious fact could be: I didn&apos;t appreciate the AI advantages at the beginning but now I can say that I have learned how to take advantage about it and honestly I used it to improve the redaction of this text you are reading.
                        <br />
                        <br />
                        I&apos;m an English Trainee and currently I have a B1/B2 level but since the IA arrived to help us... Why not start using it in our projects, right?.
                    </p>
                </div>
                <div className="text-right">
                    <CTA className="mt-4" />
                </div>
            </section>
        </div>
    );
}

import { CTA } from "@/components/CTA";
import { HeadTitle } from "@/components/HeadTitle";
import Image from "next/image";
import { getAge } from "src/utils";

export default function About() {
    return (
        <div className="grid gap-10 pt-10 xl:pt-24 xl:grid-cols-2">
            <section className="border-2 rounded-lg xl:relative dark:border-slate-700">
                <Image
                    priority
                    src="https://earnionc.sirv.com/portfolio-felix/me.jpeg"
                    className="mx-auto rounded-lg xl:relative xl:-left-4 xl:-top-4 xl:mx-0"
                    alt="Felix Pacheco Avatar"
                    draggable="false"
                    width={350}
                    height={800}
                />
                <Image
                    priority
                    src="https://earnionc.sirv.com/portfolio-felix/mountain.jpeg"
                    className="hidden rounded-lg xl:inline-block xl:absolute xl:-bottom-4 xl:-right-4"
                    alt="Felix Pacheco Avatar"
                    draggable="false"
                    width={460}
                    height={460}
                />
            </section>
            <section>
                <HeadTitle
                    classNames={{ title: "md:text-right" }}
                    title={
                        <>
                            I&apos;m Felix. <br /> A System&apos;s Engineer <br /> from
                            Caracas,
                            <span className="text-yellow-500 dark:text-yellow-600">
                                {" "}
                                Ven
                                <span className="text-blue-500 dark:text-blue-600">
                                    ezu<span className="text-red-500 dark:text-red-600">ela</span>
                                </span>
                            </span>
                            .
                        </>
                    }
                />
                <div className="xl:pl-5 dark:text-gray-400 text-[14.5px] pt-5 flex flex-col gap-5">
                    <p>
                        {`I am ${getAge()} years old and have been working as a React Developer since 2019.`}
                    </p>
                    <p>
                        I pride myself on being honest, detail-oriented, responsible, and
                        proactive in my work. I&#39;m passionate about delivering
                        high-quality results and consider myself a persistent individual who
                        overcomes challenges and strives to excel. I value collaboration and
                        always aim to support and learn from my colleagues, growing both
                        professionally and personally.
                    </p>
                    <p>
                        I studied architecture for one semester in college, as I always
                        wanted to create things that people could use. However, I realized
                        that I was in the wrong career and switched to System&apos;s
                        Engineering.
                    </p>
                    <p>
                        I have had the good fortune of working with some amazing
                        professionals who have pushed my skills to the next level.
                    </p>
                    <p>
                        Today, I consider myself someone who always tries to do things as
                        well as I can. I read a lot of articles on good practices and best
                        patterns in the current year. I also understand why we need to take
                        care or avoid certain patterns or structures that may seem harmless
                        but significantly affect the performance of our applications. I am a
                        big fan of Midudev&apos;s work and have tried his tips, seen his
                        courses, and more.
                    </p>
                    <p>
                        Nowadays I take advantage of using AI to help me in my daily tasks.
                        Copilot has been a great partner in my projects, and I am always
                        looking for new ways to improve my workflow.
                    </p>
                    <p>
                        I&apos;m also investing time on improving my English skills. I have
                        finished a course here in Venezuela and also I had the pleasure of
                        working with native speakers during all these time and currently I
                        have a B2 level.
                    </p>
                    <p>
                        So, that&apos;s me in a nutshell. I hope you enjoy my work and if
                        you have any questions, feel free to ask.
                    </p>
                </div>
                <div className="text-right">
                    <CTA className="mt-4" />
                </div>
            </section>
        </div>
    );
}

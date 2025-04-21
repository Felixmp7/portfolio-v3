import { HeadTitle } from "@/components/HeadTitle";
import { ProjectResume } from "@/components/ProjectResume";
import { MainSection } from "@/components/layout/MainSection";
import { getProjects } from "@/lib/services";

export default async function ProjectsPage() {
    const projects = await getProjects();
    return (
        <MainSection>
            <HeadTitle
                title="Projects"
                // eslint-disable-next-line max-len
                description="This section contains some personal projects and some others are frontend or fullstack tests for applying to some professional position. All of them are built using React, and some of them include other technologies like Next.js, TypeScript, and Tailwind CSS. The source code for all of them is available on my GitHub account."
                classNames={{ title: 'mb-2' }}
            />
            <ul className="grid gap-8 mt-10 md:grid-cols-2" aria-label="Project list">
                {projects.map(({ id, ...rest}) => (
                    <li key={id}>
                        <ProjectResume id={id} {...rest} />
                    </li>
                ))}
            </ul>
        </MainSection>
    );
}

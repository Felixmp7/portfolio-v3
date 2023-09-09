/* eslint-disable max-len */
import { HeadTitle } from "@/components/HeadTitle";
import { ProjectResume } from "@/components/ProjectResume";
import { MainSection } from "@/components/layout/MainSection";
import { GET } from "src/app/api/projects/route";
import { EProjectStatus } from "src/types";

export default async function Projects() {
    const projects = await GET();
    return (
        <MainSection>
            <HeadTitle
                title="Projects"
                description="As a seasoned React developer with over 4 years of experience, I have developed a strong proficiency in building responsive and user-friendly web applications. My expertise lies in leveraging React's versatile features to create scalable and efficient front-end solutions that meet the needs of modern web development."
                classNames={{ title: 'mb-3' }}
            />
            <div className="grid gap-4 mt-10 md:grid-cols-2 xl:grid-cols-3">
                {projects.map((props) => (
                    <ProjectResume {...props} key={props.id} status={props.status as EProjectStatus} />
                ))}
            </div>
        </MainSection>
    );
}

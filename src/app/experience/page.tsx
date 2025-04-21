/* eslint-disable max-len */
import { ExperienceSummary } from "@/components/ExperienceSummary";
import { HeadTitle } from "@/components/HeadTitle";
import { MainSection } from "@/components/layout/MainSection";
import { getExperiences } from "@/lib/services";

export default async function Experience() {
    const experiences = await getExperiences();
    return (
        <MainSection>
            <HeadTitle
                title="Experience"
                description="As a seasoned React developer with over 5 years of experience, I have developed a strong proficiency in building responsive and user-friendly web applications. My expertise lies in leveraging React's versatile features to create scalable and efficient front-end solutions that meet the needs of modern web development."
                classNames={{ title: 'mb-3' }}
            />
            <div className="grid gap-4 mt-10 md:grid-cols-2 xl:grid-cols-3">
                {experiences.map((props) => (
                    <ExperienceSummary {...props} key={props.id} />
                ))}
            </div>
        </MainSection>
    );
}

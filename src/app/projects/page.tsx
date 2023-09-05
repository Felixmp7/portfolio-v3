/* eslint-disable max-len */
import { HeadTitle } from "@/components/HeadTitle";
import { MainSection } from "@/components/layout/MainSection";
import { ProjectResume } from "@/components/projects/ProjectResume";
import { EProjectStatus } from "src/types";

const example = [
    {
        id: 1,
        enterpriseName: 'ServicePad',
        logo: '/assets/enterprises/servicepad.svg',
        description: 'Admin Portal Web Application that offers a way to manage contracts with companies, manufacturers and dealers in the world of construction of different unit structures.',
        status: EProjectStatus.completed,
        link: 'https://app.servicepad.com/auth/login',
        urlName: 'app.servicepad'
    },
    {
        id: 2,
        enterpriseName: 'Matic',
        logo: '/assets/enterprises/matic.svg',
        description: 'Build and maintenance of an SDK Application to allow our clients to integrate our available payment methods in their websites.',
        status: EProjectStatus.completed,
        link: 'https://matic.io/product/',
        urlName: 'matic.io'
    },
    {
        id: 3,
        enterpriseName: 'Matic',
        logo: '/assets/enterprises/matic.svg',
        description: 'Build and maintenance of an Admin Portal Web Application that offers an easy way to manage your payments, associated customers and transactions.',
        status: EProjectStatus.completed,
        link: 'https://matic.io/product/',
        urlName: 'matic.io'
    },
    {
        id: 4,
        enterpriseName: 'Brocsoft',
        logo: '/assets/enterprises/brocsoft.png',
        description: 'We proposed a V2 following best development practices and replicating a mobile version of an application to exchange shirts of football teams.',
        status: EProjectStatus.completed,
        link: 'https://brocsoft.com/',
        urlName: 'brocsoft.com'
    },
    {
        id: 5,
        enterpriseName: 'Brocsoft',
        logo: '/assets/enterprises/brocsoft.png',
        description: "I was part of Zeppelin Labs' Team Engineers making different products and platforms for Latin America's finance and payments industries.",
        status: EProjectStatus.completed,
        link: 'https://zeppelinlabs.io/',
        urlName: 'zeppelinlabs.io'
    },
    {
        id: 6,
        enterpriseName: 'Wadara',
        logo: '/assets/enterprises/wadara.png',
        description: 'I participated on the discovery, development and proposals of solutions, products and platforms for one of the main Insurance Enterprises of Venezuela.',
        status: EProjectStatus.poc,
        link: 'https://www.linkedin.com/company/wadara/',
        urlName: 'linkedin.com/company/wadara'
    },
    {
        id: 7,
        enterpriseName: 'ServiSenior',
        logo: '/assets/enterprises/servisenior.jpeg',
        description: 'An impact entrepreneurship that collaborates with the labor inclusion of people over 50 years old, through a web platform that connects them with people and companies, through different services.',
        status: EProjectStatus.completed,
        link: 'https://home.servisenior.cl/',
        urlName: 'servisenior.cl'
    }
];

export default function Projects() {
    return (
        <MainSection>
            <HeadTitle
                title="Projects"
                description="As a seasoned React developer with over 4 years of experience, I have developed a strong proficiency in building responsive and user-friendly web applications. My expertise lies in leveraging React's versatile features to create scalable and efficient front-end solutions that meet the needs of modern web development."
                classNames={{ title: 'mb-3' }}
            />
            <div className="grid gap-4 mt-10 md:grid-cols-2 xl:grid-cols-3">
                {example.map((props) => (
                    <ProjectResume key={props.id} {...props} />
                ))}
            </div>
        </MainSection>
    );
}

import { HeadTitle } from "@/components/HeadTitle";
import { MainSection } from "@/components/layout/MainSection";
import { Test } from "@/components/tests/Test";
import { TTestResume } from "src/types";

const tests: TTestResume[] = [
    {
        id: 1,
        name: 'Reign',
        logo: '/assets/enterprises/reign.jpeg',
        position: 'React Developer Ssr.',
        date: '2022',
        context: `The web application must request data to the Hackers News public API.
        The dropdown selector component should use the URL parameter “query” from the “search by date” API in order to filter the posts.`,
        deployLink: 'https://admirable-dasik-8f8f85.netlify.app/',
        repositoryLink: 'https://github.com/Felixmp7/reign-test',
        description : '',
        wasHired: false
    },
    {
        id: 2,
        name: 'Matic',
        logo: '/assets/enterprises/matic.svg',
        position: 'React Developer Ssr.',
        date: '2022',
        context: `You need to complete some logic exercises with javascript or typescript and also you need to design a landing page where you will apply the skills required for a front-end developer position.`,
        deployLink: 'https://matic-test.vercel.app/',
        repositoryLink: 'https://github.com/Felixmp7/matic-test',
        description : '',
        wasHired: true
    }
];

export default function Tests() {
    return (
        <MainSection>
            <HeadTitle
                title="Frontend Tests"
                description="This is a brief description of the frontend tests I developed as a React Developer to showcase my skills and qualify for frontend development positions."
                classNames={{ title: 'mb-2' }}
            />
            <div className="grid gap-8 mt-10 md:grid-cols-2 place-items-start">
                {tests.map(({ id, ...rest}) => (
                    <Test key={id} id={id} {...rest} />
                ))}
            </div>
        </MainSection>
    );
}

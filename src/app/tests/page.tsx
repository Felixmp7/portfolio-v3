import { HeadTitle } from "@/components/HeadTitle";
import { TestResume } from "@/components/TestResume";
import { MainSection } from "@/components/layout/MainSection";
import testJson from 'src/static/tests.json';

export default function Tests() {
    return (
        <MainSection>
            <HeadTitle
                title="Frontend Tests"
                description="This is a brief description of the frontend tests I developed as a React Developer to showcase my skills and qualify for frontend development positions."
                classNames={{ title: 'mb-2' }}
            />
            <div className="grid gap-8 mt-10 md:grid-cols-2 place-items-start">
                {testJson.map(({ id, ...rest}) => (
                    <div key={id} className="relative p-5 border rounded-md shadow-md dark:border-zinc-600">
                        <TestResume  id={id} {...rest} wasHiredClassNames="dark:bg-zinc-800" />
                    </div>
                ))}
            </div>
        </MainSection>
    );
}

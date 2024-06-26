import { HeadTitle } from "@/components/HeadTitle";
import { TestResume } from "@/components/TestResume";
import { MainSection } from "@/components/layout/MainSection";
import { getChallenges } from "src/lib/services";

export default async function Tests() {
    const challenges = await getChallenges();
    return (
        <MainSection>
            <HeadTitle
                title="Frontend Tests"
                description="This is a brief description of the frontend tests I developed as a React Developer to showcase my skills and qualify for frontend development positions."
                classNames={{ title: 'mb-2' }}
            />
            <div className="grid gap-8 mt-10 md:grid-cols-2 place-items-start">
                {challenges.map(({ id, ...rest}) => (
                    <div key={id} className="relative p-5 border rounded-md shadow-md dark:border-slate-600">
                        <TestResume  id={id} {...rest} hiredClassName="dark:bg-slate-800" />
                    </div>
                ))}
            </div>
        </MainSection>
    );
}

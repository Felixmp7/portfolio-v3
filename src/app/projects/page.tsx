import { HeadTitle } from "@/components/HeadTitle";
import { MainSection } from "@/components/layout/MainSection";

export default function Projects() {
    return (
        <MainSection>
            <HeadTitle
                title="Projects"
                description="For confidentiality issues and data sensitivity I can't share some assets from my latest works, however you can view most of them in the last years below:"
                classNames={{ title: 'mb-3' }}
            />
        </MainSection>
    );
}

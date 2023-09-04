import { HeadTitle } from "@/components/HeadTitle";
import { Review } from "@/components/Review";
import { MainSection } from "@/components/layout/MainSection";

export default function Reviews() {
    return (
        <MainSection>
            <HeadTitle
                title="Reviews"
                description="The reviews section of my web portfolio showcases feedback from clients and colleagues, highlighting their satisfaction with my work and professional conduct."
                classNames={{ title: 'mb-3' }}
            />
            <div className="grid gap-10 mt-10 md:grid-cols-2 xl:grid-cols-4">
                {Array.from(Array(10).keys()).map((_, i) => (
                // eslint-disable-next-line react/no-array-index-key
                    <Review key={i} />
                ))}
            </div>
        </MainSection>
    );
}

import { HeadTitle } from "@/components/HeadTitle";
import { Review } from "@/components/Review";
import { MainSection } from "@/components/layout/MainSection";
import reviews from 'src/static/reviews.json';
import { TGender } from "src/types";

export default function Reviews() {
    return (
        <MainSection>
            <HeadTitle
                title="Reviews"
                description="The reviews section of my web portfolio showcases feedback from clients and colleagues, highlighting their satisfaction with my work and professional conduct."
                classNames={{ title: 'mb-3' }}
            />
            <div className="grid gap-10 mt-10 lg:grid-cols-2 place-items-center">
                {reviews.map((review) => (
                    <Review {...review} key={review.name} gender={review.gender as TGender} />
                ))}
            </div>
        </MainSection>
    );
}

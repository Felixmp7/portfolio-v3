import { Review } from "@/components/Review";

export default function Reviews() {
    return (
        <section className="grid gap-10 pt-10 xl:pt-24 md:grid-cols-2 xl:grid-cols-4">
            {Array.from(Array(10).keys()).map((_, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <Review key={i} />
            ))}
        </section>
    );
}

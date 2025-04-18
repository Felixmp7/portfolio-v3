import type { Review as ReviewType } from '@prisma/client';
import { FaQuoteLeft } from 'react-icons/fa';

export const Review = ({ reviewText, fullName, charge }: ReviewType) => {
    const reviewParagraphs = reviewText.split('.,');

    return (
        <div className="overflow-hidden bg-white border rounded-md shadow-md dark:border-neutral-600 dark:bg-neutral-700">
            <div className="p-6 text-xs md:text-sm">
                <span className='inline-block mb-6 text-3xl'><FaQuoteLeft /></span>
                {reviewParagraphs.map((paragraph) => (
                    <>
                        <p key={paragraph}>{paragraph}</p>
                        <br />
                    </>
                ))}
            </div>
            <footer className="text-xs md:text-sm flex items-center gap-1.5 px-6 py-2 bg-indigo-50 dark:bg-indigo-500">
                <span className="font-medium text-indigo-900 dark:text-indigo-50">{fullName}</span>
                <span className="font-light text-indigo-600 dark:text-indigo-200">{`- ${charge}`}</span>
            </footer>
        </div>
    );
};

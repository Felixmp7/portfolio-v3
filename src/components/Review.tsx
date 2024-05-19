import { FaQuoteLeft } from 'react-icons/fa';
import { SlUser, SlUserFemale } from 'react-icons/sl';
import { Review as ReviewProps } from 'src/models/types';

export const Review = ({ reviewText, fullName, charge, gender }: ReviewProps) => {
    const reviewParagraphs = reviewText.split('.,');
    const Icon = gender === 'female' ? SlUserFemale : SlUser;

    return (
        <div className="overflow-hidden bg-white border rounded-md shadow-md dark:border-zinc-600 dark:bg-zinc-700">
            <div className="p-6 text-xs md:text-sm">
                <span className='inline-block mb-6 text-3xl'><FaQuoteLeft /></span>
                {reviewParagraphs.map((paragraph) => (
                    <>
                        <p key={paragraph}>{paragraph}</p>
                        <br />
                    </>
                ))}
            </div>
            <footer className="text-xs md:text-sm flex items-center gap-1.5 px-6 py-2 bg-yellow-50 dark:bg-yellow-500">
                <span className='inline-block p-1 text-lg font-medium border rounded-full dark:text-zinc-700 border-zinc-700'><Icon /></span>
                <span className="font-medium dark:text-zinc-700">{fullName}</span>
                <span className="font-light text-yellow-600 dark:text-white">{`- ${charge}`}</span>
            </footer>
        </div>
    );
};

import { FaQuoteLeft } from 'react-icons/fa';
import { SlUserFemale } from 'react-icons/sl';

export const Review = () => {
    return (
        <div className="overflow-hidden bg-white rounded shadow-md dark:bg-zinc-700">
            <div className="p-6">
                <span className='inline-block mb-6 text-3xl'><FaQuoteLeft /></span>
                <p>
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                </p>
            </div>
            <footer className="flex items-center gap-1.5 px-6 py-2 bg-yellow-200 dark:bg-yellow-500">
                <span className='inline-block p-2 text-xl text-yellow-600 border border-yellow-600 rounded-full dark:text-white dark:border-white'><SlUserFemale /></span>
                <span className="font-medium dark:text-zinc-700">Joe Doe</span>
                <span className="font-light text-yellow-600 dark:text-white">- HR Manager</span>
            </footer>
        </div>
    );
};

import Link from 'next/link';
import { FaHamburger } from 'react-icons/fa';
import { NAVIGATION } from 'src/constants';
import { useBurguerMenu } from 'src/hooks/useBurguerMenu';

export const BurguerMenu = () => {
    const { dropdownRef, isOpened, toggleMenu } = useBurguerMenu();
    return (
        <div className='relative sm:hidden' ref={dropdownRef}>
            <button id="dropdown-menu" data-dropdown-toggle="dropdown" type="button" className="px-4 py-3 text-2xl dark:text-inherit duration-150 ease-in rounded-full dark:bg-zinc-700 shadow-md dark:border-none border-[0.5px]" onClick={toggleMenu}>
                <FaHamburger />
            </button>

            {isOpened && (
                <div id="dropdown" className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-md w-28 top-16 dark:bg-zinc-700">
                    <ul className="py-2 text-sm" aria-labelledby="dropdown-menu">
                        <li>
                            <Link className="block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-600 dark:hover:text-white" href={NAVIGATION.about}>About</Link>
                        </li>
                        <li>
                            <Link className="block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-600 dark:hover:text-white" href={NAVIGATION.projects}>Projects</Link>
                        </li>
                        <li>
                            <Link className="block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-600 dark:hover:text-white" href={NAVIGATION.reviews}>Reviews</Link>
                        </li>
                        <li>
                            <Link className="block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-600 dark:hover:text-white" href={NAVIGATION.tests}>Tests</Link></li>
                    </ul>
                </div>
            )}
        </div>
    );
};

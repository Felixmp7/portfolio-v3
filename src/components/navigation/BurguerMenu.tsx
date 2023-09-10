import { useBurguerMenu } from '@/hooks/useBurguerMenu';
import Link from 'next/link';
import { FaHamburger } from 'react-icons/fa';
import { LiaTimesSolid } from 'react-icons/lia';
import { NAVIGATION } from 'src/constants';

export const BurguerMenu = () => {
    const { dropdownRef, isOpened, toggleMenu } = useBurguerMenu();
    return (
        <div className='relative sm:hidden' ref={dropdownRef}>
            <button
                id="dropdown-menu"
                aria-label="Burger Menú"
                data-dropdown-toggle="dropdown"
                type="button"
                className="p-2 text-xl dark:text-inherit duration-150 ease-in rounded-full dark:bg-zinc-700 shadow-md dark:border-none border-[0.5px]"
                onClick={toggleMenu}
            >
                {isOpened ? <LiaTimesSolid /> : <FaHamburger />}
            </button>

            {isOpened && (
                <div id="dropdown" className="absolute right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-md w-28 top-16 dark:bg-zinc-700">
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

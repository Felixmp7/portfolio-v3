import { useBurgerMenu } from '@/hooks/useBurgerMenu';
import Link from 'next/link';
import { FaHamburger } from 'react-icons/fa';
import { LiaTimesSolid } from 'react-icons/lia';
import { NAVIGATION } from 'src/constants';

export const BurgerMenu = () => {
    const { dropdownRef, isOpened, toggleMenu } = useBurgerMenu();
    return (
        <div className='relative sm:hidden' ref={dropdownRef}>
            <button
                id="dropdown-menu"
                aria-label="Burger Menú"
                data-dropdown-toggle="dropdown"
                type="button"
                className="p-2 text-xl dark:text-inherit duration-150 ease-in rounded-full dark:bg-slate-700 shadow-md dark:border-none border-[0.5px]"
                onClick={toggleMenu}
            >
                {isOpened ? <LiaTimesSolid /> : <FaHamburger />}
            </button>

            {isOpened && (
                <div id="dropdown" className="absolute right-0 z-10 bg-white divide-y divide-slate-100 rounded-lg shadow-md w-28 top-16 dark:bg-slate-700">
                    <ul className="py-2 text-sm" aria-labelledby="dropdown-menu">
                        <li>
                            <Link className="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600 dark:hover:text-white" href={NAVIGATION.about}>About</Link>
                        </li>
                        <li>
                            <Link className="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600 dark:hover:text-white" href={NAVIGATION.experience}>Experience</Link>
                        </li>
                        <li>
                            <Link className="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600 dark:hover:text-white" href={NAVIGATION.projects}>Projects</Link>
                        </li>
                        <li>
                            <Link className="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600 dark:hover:text-white" href={NAVIGATION.reviews}>Reviews</Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

import Link from 'next/link';
import { FaHamburger } from 'react-icons/fa';
import { LiaTimesSolid } from 'react-icons/lia';

import { useBurgerMenu } from '@/hooks/useBurgerMenu';
import { getLinksArray } from '@/utils';

export const BurgerMenu = () => {
    const { dropdownRef, isOpened, toggleMenu } = useBurgerMenu();
    const links = getLinksArray();

    return (
        <div className='relative sm:hidden' ref={dropdownRef}>
            <button
                id="dropdown-menu"
                aria-label="Burger Menú"
                aria-expanded={isOpened}
                aria-controls="dropdown"
                data-dropdown-toggle="dropdown"
                type="button"
                className="p-2 text-xl dark:text-inherit duration-150 ease-in rounded-full dark:bg-neutral-700 shadow-md dark:border-none border-[0.5px] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                onClick={toggleMenu}
            >
                {isOpened ? <LiaTimesSolid /> : <FaHamburger />}
            </button>

            {isOpened && (
                <div id="dropdown" className="absolute right-0 z-10 bg-white divide-y rounded-lg shadow-md divide-neutral-100 w-28 top-16 dark:bg-neutral-700">
                    <ul className="py-2 text-sm" aria-labelledby="dropdown-menu">
                        {links.map(([key, link]) => (
                            <li key={key}>
                                <Link
                                    className="block px-4 py-2 capitalize hover:bg-neutral-100 dark:hover:bg-neutral-600 dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                                    href={link}
                                >
                                    {key}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

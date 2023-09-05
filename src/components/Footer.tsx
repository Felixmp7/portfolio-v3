import { NavbarItems } from '@/components/NavbarItems';
import clsx from 'clsx';

type TProps = {
    className?: string
}

export const Footer = ({ className = ''}: TProps) => {
    const classNames = clsx({
        'flex flex-col items-center space-y-4 dark:border-zinc-700 border-t-2 sm:py-5 sm:space-y-0 sm:flex-row sm:justify-between': true,
        [className]: !!className
    });
    return (
        <footer className={classNames}>
            <ul className="flex gap-8 py-3">
                <NavbarItems />
            </ul>
            <span className='text-zinc-500'>Powered by Felix Pacheco | 2023</span>
        </footer>
    );
};

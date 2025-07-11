import { NavbarItems } from '@/components/navigation/NavbarItems';
import clsx from 'clsx';

type Props = {
    className?: string
}

export const Footer = ({ className = ''}: Props) => {
    const classNames = clsx({
        'flex flex-col items-center space-y-4 dark:border-neutral-700 border-t-2 py-5 sm:space-y-0 sm:flex-row sm:justify-between': true,
        [className]: !!className
    });
    return (
        <footer className={classNames}>
            <ul className="flex gap-8 py-3">
                <NavbarItems />
            </ul>
            <span className='text-xs text-neutral-400 md:text-sm'>Powered by Felix Pacheco | 2023</span>
        </footer>
    );
};

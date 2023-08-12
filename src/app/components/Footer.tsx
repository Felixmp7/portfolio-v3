import { NavbarItems } from '@/components/NavbarItems';

export const Footer = () => {
    return (
        <footer className='flex flex-col items-center h-40 pt-10 space-y-4 sm:pt-20 sm:space-y-0 sm:flex-row sm:justify-between'>
            <ul className="flex gap-8 py-3">
                <NavbarItems />
            </ul>
            <span className='text-zinc-500'>Powered by Felix Pacheco | 2023</span>
        </footer>
    );
};

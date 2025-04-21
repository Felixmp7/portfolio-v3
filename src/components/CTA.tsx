import clsx from "clsx";
import Link from "next/link";

type Props = {
    className?: string
}

export const CTA = ({ className = ''}:Props) => {
    const classNames = clsx({
        'inline-block px-5 py-1.5 border transition-all duration-200 rounded-full dark:opacity-80 dark:bg-neutral-700 bg-neutral-100 hover:bg-neutral-200 dark:hover:opacity-100 border-neutral-300 dark:border-neutral-500': true,
        [className]: !!className
    });
    return (
        <Link href="mailto:devfex.19@gmail.com?subject=Hi, I checked your portfolio!&body=Hi, Felix!" className={classNames}>Hire</Link>
    );
};

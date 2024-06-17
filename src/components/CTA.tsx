import clsx from "clsx";
import Link from "next/link";

type TProps = {
    className?: string
}

export const CTA = ({ className = ''}:TProps) => {
    const classNames = clsx({
        'inline-block px-5 py-1.5 border transition-all duration-200 rounded-full dark:opacity-80 dark:bg-slate-700 bg-slate-100 hover:bg-slate-200 dark:hover:opacity-100 border-slate-300 dark:border-slate-500': true,
        [className]: !!className
    });
    return (
        <Link href="mailto:devfex.19@gmail.com?subject=Hi, I checked your portfolio!&body=Hi, Felix!" className={classNames}>Hire</Link>
    );
};

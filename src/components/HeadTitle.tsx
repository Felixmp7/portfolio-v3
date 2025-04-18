import clsx from "clsx";
import { ReactNode } from "react";

type TProps = {
    title: ReactNode,
    description?: string,
    classNames?: {
        title?: string,
        description?: string
    }
}

export const HeadTitle = ({ title, description, classNames }: TProps) => {
    const titleClasses = clsx({
        'text-3xl font-semibold select-none md:text-5xl': true,
        [classNames?.title || '']: !!classNames?.title
    });
    const descriptionClasses = clsx({
        'max-w-md leading-5 md:max-w-xl md:leading-7 dark:text-neutral-400': true,
        [classNames?.description || '']: !!classNames?.description
    });
    return (
        <>
            <h1 className={titleClasses}>{title}</h1>
            {description && (

                <p className={descriptionClasses}>
                    {description}
                </p>
            )}
        </>
    );
};

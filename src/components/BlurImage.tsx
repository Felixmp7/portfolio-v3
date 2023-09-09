'use client';
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

type TProps = {
    src: string,
    alt: string
    fill?: boolean,
    quality?: number,
    className?: string
}

export default function BlurImage({ className = '', ...rest} : TProps) {
    const [isLoading, setLoading] = useState(true);

    const imageClasses = clsx({
        'duration-700 ease-in-out group-hover:opacity-75 object-cover': true,
        'scale-110 blur-2xl grayscale': isLoading,
        'scale-100 blur-0 grayscale-0': !isLoading,
        [className]: !!className
    });
    return (
        <div className="w-full overflow-hidden rounded-lg">
            <Image
                {...rest}
                alt={rest.alt}
                className={imageClasses}
                onLoadingComplete={() => setLoading(false)}
            />
        </div>
    );
}
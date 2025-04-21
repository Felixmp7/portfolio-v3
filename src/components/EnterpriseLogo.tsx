import Image from "next/image";

type Props = {
    url: string,
    alt: string
}

export const EnterpriseLogo = ({ url, alt }: Props) => {
    return (
        <div className='inline-grid overflow-hidden border rounded-full border-neutral-300 dark:border-neutral-600 w-9 h-9 place-content-center'>
            <Image
                width={20}
                height={20}
                src={url}
                alt={alt}
            />
        </div>
    );
};

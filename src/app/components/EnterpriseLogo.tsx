import Image from "next/image";

type TProps = {
    url: string,
    alt: string
}

export const EnterpriseLogo = ({ url, alt }: TProps) => {
    return (
        <div className='inline-grid overflow-hidden border rounded-full border-zinc-300 dark:border-zinc-600 w-9 h-9 place-content-center'>
            <Image
                width={20}
                height={20}
                src={url}
                alt={alt}
            />
        </div>
    );
};

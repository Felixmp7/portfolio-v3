import Image from 'next/image';


export const MainRowImages = () => {
    return (
        <>
            <div className='relative duration-150 ease-in-out hover:scale-105'>
                <Image
                    fill
                    src="/assets/react.jpeg"
                    alt="Felix Pacheco Avatar"
                    className='object-cover rounded-3xl md:rotate-6'
                />
            </div>
            <div className='relative duration-150 ease-in-out hover:scale-105'>
                <Image
                    fill
                    src="/assets/mountain.jpeg"
                    alt="Felix Pacheco Avatar"
                    className='object-cover md:-translate-y-6 rounded-3xl md:rotate-1'
                />
            </div>
            <div className='relative duration-150 ease-in-out hover:scale-105'>
                <Image
                    fill
                    src="/assets/long-field.jpeg"
                    alt="Felix Pacheco Avatar"
                    className='object-cover rounded-3xl md:-rotate-2'
                />
            </div>
            <div className='relative duration-150 ease-in-out hover:scale-105'>
                <Image
                    fill
                    src="/assets/team.jpeg"
                    alt="Felix Pacheco Avatar"
                    className='object-cover md:translate-y-4 rounded-3xl md:rotate-3'
                />
            </div>
        </>
    );
};

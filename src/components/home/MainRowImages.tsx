import BlurImage from '@/components/BlurImage';


export const MainRowImages = () => {
    return (
        <>
            <div className='relative duration-150 ease-in-out hover:scale-105'>
                <BlurImage
                    fill
                    quality={40}
                    src="https://earnionc.sirv.com/portfolio-felix/react.jpeg"
                    alt="Felix Pacheco Avatar"
                    className='object-cover rounded-3xl md:rotate-6'
                />
            </div>
            <div className='relative duration-150 ease-in-out hover:scale-105'>
                <BlurImage
                    fill
                    quality={40}
                    src="https://earnionc.sirv.com/portfolio-felix/mountain.jpeg"
                    alt="Felix Pacheco Avatar"
                    className='object-cover md:-translate-y-6 rounded-3xl md:rotate-1'
                />
            </div>
            <div className='relative duration-150 ease-in-out hover:scale-105'>
                <BlurImage
                    fill
                    quality={40}
                    src="https://earnionc.sirv.com/portfolio-felix/soccer.jpeg?cy=400&ch=1320"
                    alt="Felix Pacheco Avatar"
                    className='object-cover rounded-3xl md:-rotate-2'
                />
            </div>
            <div className='relative duration-150 ease-in-out hover:scale-105'>
                <BlurImage
                    fill
                    quality={40}
                    src="https://earnionc.sirv.com/portfolio-felix/team.jpeg"
                    alt="Felix Pacheco Avatar"
                    className='object-cover md:translate-y-4 rounded-3xl md:rotate-3'
                />
            </div>
        </>
    );
};

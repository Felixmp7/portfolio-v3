import Link from 'next/link';


export const NavbarItems = () => {
    return (
        <>
            <li className="duration-150 ease-in hover:text-pink-600">
                <Link href="/about">About</Link>
            </li>
            <li className="duration-150 ease-in hover:text-blue-500">
                <Link href="/projects">Projects</Link>
            </li>
            <li className="duration-150 ease-in hover:text-yellow-600">
                <Link href="/contact">Reviews</Link>
            </li>
            <li className="duration-150 ease-in hover:text-green-600">
                <Link href="/tests">Tests</Link>
            </li>
        </>
    );
};
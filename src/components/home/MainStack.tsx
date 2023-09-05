import { BiLogoReact, BiLogoTailwindCss } from 'react-icons/bi';
import { BsGit } from 'react-icons/bs';
import { RiJavascriptFill } from 'react-icons/ri';
import { SiNextdotjs, SiTestinglibrary } from 'react-icons/si';
import { TbBrandTypescript } from 'react-icons/tb';


export const MainStack = () => {
    return (
        <div className="relative w-full mx-auto mb-10 text-4xl sm:w-2/3 main-stack-grid h-96 md:mb-0 md:w-auto md:mx-0">
            <a href='https://nextjs.org/' target='_blank' className="inline-grid p-2 text-white duration-500 ease-in-out bg-orange-500 rounded dark:bg-orange-700 hover:dark:bg-orange-400 div1 place-content-center hover:-translate-y-3">
                <BsGit />
            </a>
            <a href='https://www.typescriptlang.org/' target='_blank' className="flex justify-end p-2 text-white duration-500 ease-in-out bg-blue-500 rounded dark:bg-blue-700 hover:-translate-y-2 hover:translate-x-2 hover:dark:bg-blue-500 div2">
                <TbBrandTypescript />
            </a>
            <a href='https://es.react.dev/' target='_blank' className="inline-grid p-2 text-white duration-500 ease-in-out rounded hover:translate-x-3 dark:bg-cyan-700 bg-cyan-500 hover:dark:bg-cyan-500 div3 place-content-center text-7xl">
                <BiLogoReact />
            </a>
            <a href='https://testing-library.com/docs/react-testing-library/intro/' target='_blank' className="inline-grid p-2 text-white duration-500 ease-in-out bg-red-500 rounded dark:bg-red-700 place-content-center hover:translate-y-3 hover:translate-x-1 hover:dark:bg-red-400 div4">
                <SiTestinglibrary />
            </a>
            <a href='https://developer.mozilla.org/es/docs/Web/JavaScript' target='_blank' className="inline-grid p-2 text-6xl text-white duration-500 ease-in-out bg-yellow-500 rounded dark:bg-yellow-700 hover:translate-y-4 hover:-translate-x-3 hover:dark:bg-yellow-400 div5 place-content-end">
                <RiJavascriptFill />
            </a>
            <a href='https://tailwindcss.com/' target='_blank' className="inline-flex items-center justify-end p-2 text-white duration-500 ease-in-out rounded hover:-translate-x-5 dark:bg-sky-700 hover:dark:bg-sky-400 div6 bg-sky-500">
                <BiLogoTailwindCss />
            </a>
            <a href='https://nextjs.org/docs' target='_blank' className="inline-grid p-2 text-white duration-500 ease-in-out bg-black rounded hover:dark:text-black hover:-translate-y-4 dark:bg-zinc-700 hover:dark:bg-white div7 place-content-center text-7xl">
                <SiNextdotjs />
            </a>
        </div>
    );
};

'use client';

import Spinner from "@/components/Spinner";
// import { Application } from "@splinetool/runtime";
// import { lazy, Suspense } from 'react';
// const Spline = lazy(() => import('@splinetool/react-spline'));

export const Laptop3D = () => {
    return <div className="hidden xl:visible xl:grid xl:place-content-center">
        <Spinner />
        <span className="mt-2">
            Coming soon...
        </span>
    </div>;
    // const onLoad = (spline: Application) => {
    //     spline.setZoom(0.5);
    // };

    // return (
    //     <Suspense fallback={(
    //         <div className="grid place-content-center">
    //             <Spinner />
    //         </div>
    //     )}>
    //         <Spline scene="https://prod.spline.design/wJCgUvwlrOlkmQrz/scene.splinecode" onLoad={onLoad} />
    //     </Suspense>
    // );
};

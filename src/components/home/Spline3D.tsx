'use client';

import Spinner from "@/components/Spinner";
import { Application } from "@splinetool/runtime";
import { lazy, Suspense } from 'react';
const Spline = lazy(() => import('@splinetool/react-spline'));

export const Spline3D = () => {

    const onLoad = (spline: Application) => {
        spline.setZoom(0.5);
    };

    return (
        <Suspense fallback={(
            <div className="hidden xl:visible xl:grid xl:place-content-center">
                <Spinner />
            </div>
        )}>
            <Spline scene="https://prod.spline.design/FFs-WdvYFpj7feEm/scene.splinecode" onLoad={onLoad} />
        </Suspense>
    );
};

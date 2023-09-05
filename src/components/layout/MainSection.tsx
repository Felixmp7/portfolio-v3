import { PropsWithChildren } from "react";

export const MainSection = ({ children }: PropsWithChildren) => {
    return (
        <section className="pt-10 select-none xl:pt-24">{children}</section>
    );
};

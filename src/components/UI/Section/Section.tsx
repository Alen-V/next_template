import { FC } from "react";

import style from "./Section.module.css";

interface Section {
    children: JSX.Element;
    id: string;
}

export const Section: FC<Section> = ({ children, id }) => {
    return (
        <section className={style.wrapper} id={id}>
            {children}
        </section>
    );
};

import type { FC } from "react";
import cx from "classnames";

import css from "./SlideDrawer.module.css";
import { PageEvent } from "types/events";

interface SlideDrawer {
    isOpen: boolean;
    setIsOpen: (value: boolean, event: PageEvent) => void;
}

export const SlideDrawer: FC<SlideDrawer> = ({ isOpen, setIsOpen }) => {
    return (
        <div onClick={() => setIsOpen(!isOpen, "slide_drawer")} className={cx(css.burger_button, isOpen && css.open)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

import type { FC } from "react";
import cx from "classnames";

import css from "./SlideDrawer.module.css";
import { PageEvent } from "types/events";

interface SlideDrawerStyle {
    height: string;
    width: string;
}
interface SlideDrawer {
    isOpen: boolean;
    setIsOpen: (value: boolean, event: PageEvent) => void;
    style: SlideDrawerStyle;
}

export const SlideDrawer: FC<SlideDrawer> = ({ isOpen, setIsOpen, style }) => {
    return (
        <div className={css.wrapper} style={style}>
            <div onClick={() => setIsOpen(!isOpen, "slide_drawer")} className={cx(css.button, isOpen && css.open)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

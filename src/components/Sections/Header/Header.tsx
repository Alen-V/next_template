"use client";

import { SlideDrawer } from "components/UI/Button";
import { FC } from "react";

import style from "./Header.module.css";
import { useSlideDrawer } from "hooks";

interface Header {}

export const Header: FC<Header> = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useSlideDrawer(false);

    return (
        <header>
            <div className={style.button_wrapper}>
                <SlideDrawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
            </div>
        </header>
    );
};

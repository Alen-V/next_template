import { useState, ElementType } from "react";
import { PageEvent } from "types/events";

type SlideDrawerReturn = [boolean, (value: boolean, event: PageEvent) => void];

type Selector = string;

export const useSlideDrawer = (value: boolean, selector: Selector = "html"): SlideDrawerReturn => {
    const [isOpen, setIsOpen] = useState<boolean>(value);

    const handleSlideClick = (value: boolean, event: PageEvent) => {
        gtag("event", "slide_drawer_click", {
            event,
        });

        const html = document.querySelector(selector);
        const command = value ? "add" : "remove";

        html?.classList[command]("hide_scrollbar");

        setIsOpen(value);
    };

    return [isOpen, handleSlideClick];
};

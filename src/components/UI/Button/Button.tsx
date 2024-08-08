import { FC, ButtonHTMLAttributes } from "react";

import styles from "./Button.module.css";
import cx from "classnames";

type ButtonStyle = "primary" | "secondary";

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
    as: ButtonStyle;
}

export const Button: FC<Button> = ({ children, as, type = "button", ...rest }) => {
    return (
        <button className={cx(styles[as])} type={type} {...rest}>
            {children}
        </button>
    );
};

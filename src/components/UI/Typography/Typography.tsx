import { FC } from "react";

import styles from "./Typography.module.css";

type HTMLTag = "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type TypographyStyle = HTMLTag | "p1" | "p2" | "p3";

interface Typography {
    as: HTMLTag;
    text: string;
    style?: TypographyStyle;
}

export const Typography: FC<Typography> = ({ as: Tag = "p", text, style }) => {
    return <Tag className={styles[style || Tag]}>{text}</Tag>;
};

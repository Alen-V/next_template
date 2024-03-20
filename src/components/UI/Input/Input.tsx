import { FC, InputHTMLAttributes } from "react";

interface Input extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<Input> = ({ ...rest }) => {
    return <input {...rest} />;
};

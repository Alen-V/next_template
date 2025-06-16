import { FC } from 'react';

import style from './DrawerMenu.module.css';
import { Section } from 'components/UI';

interface DrawerMenu {}

export const DrawerMenu: FC<DrawerMenu> = () => {
    return (
        <Section id="drawer_menu">
            <div className={style.drawer_menu}></div>
        </Section>
    );
};

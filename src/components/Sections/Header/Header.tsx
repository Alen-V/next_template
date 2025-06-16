'use client';

import { SlideDrawer } from 'components/UI/Button';
import { FC } from 'react';

import style from './Header.module.css';
import { useSlideDrawer } from 'hooks';
import { createPortal } from 'react-dom';
import { DrawerMenu } from '../DrawerMenu/DrawerMenu';

interface Header {}

export const Header: FC<Header> = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useSlideDrawer(false);

    return (
        <header>
            {/* <SlideDrawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} style={{ height: '50px', width: '50px' }} />
            {isDrawerOpen && createPortal(<DrawerMenu />, document.body)} */}
        </header>
    );
};

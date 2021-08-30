import React from 'react';
import * as BsIcons from 'react-icons/bs';
export const SidebarData = [
  {
    title: 'MyPage',
    path: '/mypage',
    icon: <BsIcons.BsPersonBoundingBox />,
  },
  {
    title: 'Home',
    path: '/',
    icon: <BsIcons.BsFillHouseDoorFill />,
  },
  {
    title: 'About',
    path: '/about',
    icon: <BsIcons.BsFillInfoCircleFill />,
  },
  {
    title: 'Contact Us',
    path: '/contact',
    icon: <BsIcons.BsEnvelopeFill />,
  },
];

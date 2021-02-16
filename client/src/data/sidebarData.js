import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';

export const SidebarData = [
    {
        title: 'Home',
        path: '/dashboard',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
    },
    {
        title: 'Billing',
        path: '/billing',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
    },
    {
        title: 'Instruments Management',
        path: '/instrumentmanagement',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text',
    },
    {
        title: 'Export Management',
        path: '/exportmanagement',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text',
    },
    {
        title: 'Uploads',
        path: '/uploads',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text',
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text',
    },
    {
        title: 'Logout',
        path: '/',
        icon: <BiIcons.BiRun />,
        cName: 'logout nav-text',
    },
];
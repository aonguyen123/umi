import React from 'react';
import LoginLayout from '@/components/Layout/LoginLayout';
import BasicLayout from '@/components/Layout/BasicLayout';

export default function({ location: { pathname }, children }) {
    if (pathname.startsWith('/login')) {
        return <LoginLayout>{children}</LoginLayout>;
    }
    if (pathname.startsWith('/home')) {
        return children;
    }
    return <BasicLayout>{children}</BasicLayout>;
}

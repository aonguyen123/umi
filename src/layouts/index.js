import React from 'react';
import LoginLayout from '@/components/Layout/LoginLayout';
import BasicLayout from '@/components/Layout/BasicLayout';

export default function ({ location: { pathname }, children }) {
    if (pathname.startsWith('/user/login')) {
        return <LoginLayout>{children}</LoginLayout>;
    }
    return <BasicLayout>{children}</BasicLayout>;
}

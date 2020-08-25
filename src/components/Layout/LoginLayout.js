import React from 'react';

export default function LoginLayout({ children }) {
    return (
        <div>
            <h2>LoginLayout</h2>
            <div className="container">{children}</div>
        </div>
    );
}

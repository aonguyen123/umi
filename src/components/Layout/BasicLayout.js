import React from 'react';

export default function BasicLayout({ children }) {
    return (
        <div>
            <h2>BasicLayout</h2>
            <div className="container">{children}</div>
        </div>
    );
}

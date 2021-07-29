import React from 'react';

const Tagline = ({ children }) => {
    return <>
        <div className="tagline bg-light">
            {children}
        </div>
    </>
}

export default Tagline;
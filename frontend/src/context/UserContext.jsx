import React, { createContext } from 'react';
export const userDataContext = createContext();

const UserContext = ({ children }) => {
    return (
        <div>
            <userDataContext.Provider>
                {children}
            </userDataContext.Provider>
        </div>
    );
}

export default UserContext;

import React, { useState, createContext } from 'react';

const UserDataContext = createContext();

// eslint-disable-next-line react/prop-types
const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        email: '',
        fullName: {
            firstName: '',
            lastName: ''
        }
    });

    return (
        <UserDataContext.Provider value={{ user, setUser }}>
            {children}
        </UserDataContext.Provider>
    );
};

export { UserDataContext, UserContextProvider };

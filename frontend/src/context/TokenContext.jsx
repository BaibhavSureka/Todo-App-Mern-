// src/context/TokenContext.js
import React, { createContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import tokenReducer from '../reducer/tokenReducer';

const TokenContext = createContext();

const TokenProvider = ({ children }) => {
    // Fetch initial token from localStorage
    const initialToken = JSON.parse(localStorage.getItem("authToken")) || '';

    // Use useReducer to manage token state
    const [userToken, tokenDispatch] = useReducer(tokenReducer, initialToken);

    // Example of using useEffect to update localStorage when token changes
    useEffect(() => {
        localStorage.setItem("authToken", JSON.stringify(userToken));
    }, [userToken]);

    return (
        <TokenContext.Provider value={{ userToken, tokenDispatch }}>
            {children}
        </TokenContext.Provider>
    );
};

TokenProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

const useTokenContext = () => {
    const context = React.useContext(TokenContext);
    if (!context) {
        throw new Error('useTokenContext must be used within a TokenProvider');
    }
    return context;
};

export { TokenProvider, useTokenContext };
export default TokenContext;

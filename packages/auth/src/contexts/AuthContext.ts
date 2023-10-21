import React from 'react';

const AuthContext = React.createContext({
  signIn: (buyerPhone: string, password: string) => {},
  signOut: () => {},
  signUp: (buyerPhone: string, password: string) => {},
});

const useAuth = () => React.useContext(AuthContext);

export {useAuth, AuthContext};
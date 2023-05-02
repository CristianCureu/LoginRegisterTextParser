import { createContext, useState } from 'react';

const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const [parsedIdentityData, setParsedIdentityData] = useState({});
  const [registerData, setRegisterData] = useState({});

  return (
    <RegisterContext.Provider
      value={{
        parsedIdentityData,
        setParsedIdentityData,
        registerData,
        setRegisterData,
      }}>
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterContext;

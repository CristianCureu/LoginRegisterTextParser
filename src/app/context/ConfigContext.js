import { createContext, useState } from 'react';

const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {
  const [configData, setConfigData] = useState([]);
  const [categories, setCategories] = useState([]);

  return (
    <ConfigContext.Provider
      value={{ configData, setConfigData, categories, setCategories }}>
      {children}
    </ConfigContext.Provider>
  );
};

export default ConfigContext;

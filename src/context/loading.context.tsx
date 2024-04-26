import Loader from '@components/Loader';
import React, { ReactNode, createContext, useContext, useState } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  showLoader: () => {},
  hideLoader: () => {};
}

const LoadingContext = createContext({
  isLoading: false,
  showLoader: () => {},
  hideLoader: () => {},
});

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const showLoader = () => setIsLoading(true);
  const hideLoader = () => setIsLoading(false);
  return (
    <LoadingContext.Provider value={{ isLoading, showLoader, hideLoader }}>
      {children}
      <Loader visible={isLoading} />
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);


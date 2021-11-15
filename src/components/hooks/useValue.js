import { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const useValue = () => {
  return useContext(AuthContext);
};

export default useValue;

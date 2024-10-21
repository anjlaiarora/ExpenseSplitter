// UserContext.tsx
import { createContext } from 'react';

const UserContext = createContext({
  userData: {
    userName: '',
    email: '',
  },
  setUserData: (data: { userName: string; email: string }) => {},
});

export default UserContext;

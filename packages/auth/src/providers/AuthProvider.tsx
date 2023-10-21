import React from 'react';
import AuthService from '../services/AuthService';
import { AuthContext } from '../contexts/AuthContext';

enum ActionTypes {
  RESTORE_TOKEN = 'RESTORE_TOKEN',
  SIGN_IN = 'SIGN_IN',
  SIGN_OUT = 'SIGN_OUT',
}

type Action = {
  type: ActionTypes;
  payload?: any;
};

type State = {
  isLoading: boolean;
  isSignout: boolean;
  isUser: any;
};

const reducer = (prevState: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.RESTORE_TOKEN:
      return {
        ...prevState,
        isSignout: action.payload,
        isLoading: false,
      };
    case ActionTypes.SIGN_IN:
      return {
        ...prevState,
        isSignout: false,
        isUser: action.payload,
      };
    case ActionTypes.SIGN_OUT:
      return {
        ...prevState,
        isSignout: true,
        isUser: null,
      };
    default:
      return prevState;
  }
};

async function fetchUserInfo(buyerPhone: string, password: string) {
  try {
    const formData = new FormData();
    formData.append('buyerPhone', buyerPhone);
    formData.append('password', password);

    const response = await fetch('http://149.28.134.133/api/v1/account/login-by-phone', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    });

    if (response.status === 200) {
      const userInfo = await response.json();
      return userInfo;
    } else {
      throw new Error('Failed to fetch user infor')
    }

  } catch (error) {
    throw error;
  }
}

const AuthProvider = ({
  children,
}: {
  children: (data: State) => React.ReactNode;
}) => {
  const [state, dispatch] = React.useReducer(reducer, {
    isLoading: false,
    isSignout: false,
    isUser: null,
  });

  const authContext = React.useMemo(
    () => ({
      signIn: async (buyerPhone: string, password: string) => {
        try {
          const userInfo = await fetchUserInfo(buyerPhone, password);
          await AuthService.shared.setUserInfo(userInfo);
          await AuthService.shared.setCredentials('dummy-auth-token');
          dispatch({ type: ActionTypes.SIGN_IN, payload: userInfo });
        } catch (e) {
          // Handle error
        }

      },
      signOut: async () => {
        try {
          await AuthService.shared.removeUserInfo();
          await AuthService.shared.removeCredentials();
        } catch (e) {
          // Handle error
        }

        dispatch({ type: ActionTypes.SIGN_OUT });
      },
      signUp: async (buyerPhone: string, password: string) => {
        try {
          const userInfo = await fetchUserInfo(buyerPhone, password);
          await AuthService.shared.setUserInfo(userInfo);
          await AuthService.shared.setCredentials('dummy-auth-token');
          dispatch({ type: ActionTypes.SIGN_IN, payload: userInfo });
        } catch (e) {
          // Handle error
        }

      },
    }),
    [],
  );

  React.useEffect(() => {
    const restoreToken = async () => {
      let userToken;
      let userInfo;

      try {
        userToken = await AuthService.shared.getCredentials();
        userInfo = await AuthService.shared.getUserInfo();
      } catch (e) {
        // Handle error
      }

      dispatch({ type: ActionTypes.RESTORE_TOKEN, payload: !userToken });

      if (userToken && userInfo) {
        dispatch({ type: ActionTypes.SIGN_IN, payload: userInfo })
      }
    };

    restoreToken();
  }, []);




  return (
    <AuthContext.Provider value={authContext}>
      {children(state)}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
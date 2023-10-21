import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthService {
  //TOKEN
  TOKEN_KEY = 'token';

  getCredentials(): Promise<string | null> {
    return AsyncStorage.getItem(this.TOKEN_KEY);
  }

  setCredentials(token: string): Promise<void> {
    return AsyncStorage.setItem(this.TOKEN_KEY, token);
  }

  removeCredentials(): Promise<void> {
    return AsyncStorage.removeItem(this.TOKEN_KEY);
  }


  //USER
  USER_INFO = 'user_info';

  getUserInfo(): Promise<any | null> {
    return AsyncStorage.getItem(this.USER_INFO).then((data) =>
    data ? JSON.parse(data) : null
  );
  }

  setUserInfo(user: any):Promise<void> {
    return AsyncStorage.setItem(this.USER_INFO, JSON.stringify(user));
  }

  removeUserInfo(): Promise<void> {
    return AsyncStorage.removeItem(this.USER_INFO);
  }

  static shared = new AuthService();
}

export default AuthService;
import AsyncStorage from '@react-native-async-storage/async-storage';

interface FetchOptions extends RequestInit {
    withCredentials?: boolean;
}

export const BASE_URL = 'http://149.28.134.133';
export const GET_BOOK_LIST = '/api/v1/reader/sub-books';

const setToken = async (token: string): Promise<void> => {
    try {
        await AsyncStorage.setItem('token', token);
    } catch (error) {
        console.error('Error setting token:', error);
    }
};

const getToken = async (): Promise<string | null> => {
    const userInfo = await AsyncStorage.getItem('user_info');

    if (userInfo) {
        const user = JSON.parse(userInfo);

        if (user && user.result && user.result.account && user.result.account.token) {
            const token = user.result.account.token;
            console.log('Token is:', token);

            await setToken(token);

            return token;
        }
    }

    return null;
};

export const customFetch = async (url: RequestInfo, options: FetchOptions = {}): Promise<Response> => {
    const token = await getToken();

    if (token) {
        options.headers = options.headers || {};
        options.headers.token = token;
    }

    return fetch(url, options);
};

export function handleError(error: any) {
    if (error.response) {
        console.error('Response Error:', error.response.data);
        console.error('Status:', error.response.status);
        console.error('Headers:', error.response.headers);
    } else if (error.request) {
        console.error('Request Error:', error.request);
    } else {
        console.error('Error:', error.message);
    }
    console.error('Config:', error.config);

    return { errCode: 1, errDetail: 'system error', result: null };
}



// API Book list
export const getBookList = async (page: string, limit: string): Promise<any> => {
    try {
        const response = await customFetch(`${BASE_URL}${GET_BOOK_LIST}?page=${page}&recordPerPage=${limit}`, {
            method: 'GET',
        });
        return response;
    } catch (error) {
        return handleError(error);
    }
};
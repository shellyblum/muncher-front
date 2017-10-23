import axios from 'axios';

export const LOGOUT = 'LOGOUT'
export const LOGIN = 'LOGIN'
export const TRY_LOGIN = 'TRY_LOGIN'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const tryLogin = () => ({ type: TRY_LOGIN })
export const login = () => ({ type: LOGIN })
export const logout = () => ({ type: LOGOUT })
export const loginFailure = (error) => ({ type: LOGIN_FAILURE, error })



export const loginRequest = (email, password) => {
    return async (dispatch) => {
        dispatch(tryLogin())

        try {
            const res = await axios.post('/api/users/login', { email, password });
            const token = res.data.token;
            localStorage.token = token;
            axios.defaults.headers.common['Authorization'] = token;
            dispatch(login());
        }

        catch ({ response: { status } }) {
            dispatch(loginFailure(status));
        }
    }
}
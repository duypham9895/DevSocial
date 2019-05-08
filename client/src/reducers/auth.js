import { REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthencatic: null,
    loading: true,
    user: null
};

export default function Auth(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case REGISTER_SUCCESS: {
            localStorage.getItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthencatic: true,
                loading: false
            };
        }

        case REGISTER_FAIL: {
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthencatic: false,
                loading: false
            };
        }

        default:
            return state;
    }
}

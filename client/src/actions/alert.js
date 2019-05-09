import uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
    const id = uuid.v4();
    dispatch({
        type: SET_ALERT,
        payload: { msg, alertType, id }
    });
    // Transition when disappear
    setTimeout(() => {
        document.documentElement.scrollTop = 0;
        var out = document.getElementsByClassName('alert');
        for (let i = 0; i < out.length; i++) {
            out[i].classList.add('hide');
        }
    }, 3000);
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};

import { AUTH } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const signin = ( signInData, history ) => async (dispatch) => {
    try {
        //user log in
        const { data } = await api.signIn(signInData);

        dispatch({ type: AUTH, data });

        history.push('/dashboard'); //later push to dashboard
    } catch (error) {
        console.log(error);
    }
};

export const signup = ( signUpData, history ) => async (dispatch) => {
    try {
        //user registration
        const { data } = await api.signUp(signUpData);

        dispatch({ type: AUTH, data });

        history.push('/dashboard'); //later push to dashboard
    } catch (error) {
        console.log(error);
    }
};
import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
    let initialState;
    beforeEach(() => {
        initialState = {
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirect: "/",
        }
    })
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    });
    it('should store token upon login', () => {
        expect(reducer(initialState, {
            type: actionTypes.AUTH_SUCCESS, 
            idToken: 'Token', 
            userId: 'User ID'
        })).toEqual({
            ...initialState,
            token: 'Token',
            userId: 'User ID'
        })
    })
})
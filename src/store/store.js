import createStore from 'redux-zero';

const initialState = {
    count: 1 ,
    isAuthenticated: false,
    user: '',
    password: ''
};

const store = createStore(initialState);

export default store;

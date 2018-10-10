const actions = store => ({
    increment: state => ({ count: state.count + 1 }),
    decrement: state => ({ count: state.count - 1 }),

    signin: state => ({ isAuthenticated: true }),
    signout: state => ({ isAuthenticated: false, user: null, password: null}),
});

export default actions;

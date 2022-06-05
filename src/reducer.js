const initialState = {
    darkMode: false,
    period: 'now'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MODE':
            return {...state, darkMode: action.payload}
        case 'PERIOD':
            return {...state, period: action.payload}
        default:
            return {...state};
    }
}

export default reducer;
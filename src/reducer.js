const initialState = {
    darkMode: false,
    period: 'now',
    isLoading: false,
    data: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MODE':
            return {...state, darkMode: action.payload}
        case 'PERIOD':
            return {...state, period: action.payload}
        case 'LOADING':
            return {...state, isLoading: action.payload}
        case 'DATA':
            const data =  state.data.push(action.payload);
            return {...state, isLoading: data}
        
        default:
            return {...state};
    }
}

export default reducer;
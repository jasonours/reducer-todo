export const initialState =
    { 
    item: 'Learn about reducers',
    completed: false,
    id: 8675309,
    }

export const simpleReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                }
            ];
        case 'TOGGLE_COMPLETED':
            return (state.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                } else {
                    return item
                }
            })
                );

        case 'CLEAR_COMPLETED':
            return (state.filter(item => item.completed === false))
        default:
            return state;
    }
}
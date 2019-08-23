const items = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [
                ...state,
                action.item
            ];
        case 'REMOVE_FROM_CART':
            return state.filter(item =>
                action.id !== item.id
            );
        case 'EMPTY_CART':
            return [];
        default:
            return state
    }
};

export default items
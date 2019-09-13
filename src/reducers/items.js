const items = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            let found = false;
            state.forEach(function(item) {
                console.log(item.id, action.item.id)
                if (item.id === action.item.id) {
                    found = true;
                    item.quantity += 1;
                }
            });
            if (found) {
                return state
            } else {
                action.item.quantity = 1;
                return [
                    ...state,
                    action.item
                ]
            }

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
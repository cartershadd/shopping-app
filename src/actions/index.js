export const addToCart = item => ({
    type: 'ADD_TO_CART',
    item
});

export const removeFromCart = id => ({
    type: 'REMOVE_FROM_CART',
    id
});

export const emptyCart = () => ({
    type: 'EMPTY_CART',
});

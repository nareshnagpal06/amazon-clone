

export const initialState = {
    basket: [],
    user: null
};


export const getBasketTotal = (basket) => {
    return basket.reduce((a, b) => a + b.price, 0)
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return { ...state, basket: [...state.basket, action.item] };
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => (basketItem.id === action.id)

            );
            console.log(`basket is ${state.basket[0].id}`);
            let newBasket = [...state.basket];

            if (index >= 0)
                newBasket.splice(index, 1);
            else
                console.warn(`Can't remove product (id:${action.id}) as it's not in the basket`)
            return {
                ...state, basket: newBasket
            }
        case 'SET_USER':
            return { ...state, user: action.user }
        default:
            return state;
    }
};


export default reducer;
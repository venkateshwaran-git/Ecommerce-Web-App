export const initialState = {
    basket: [],
    user: null
};

export const getBasketTotal = (basket) =>
  basket?.reduce( (amount, item) => item.price + amount, 0 );


function reducer(state, action) {
    console.log(action);
    switch(action.type) {

        case 'Set_User':
            return {
                ...state,
                user: action.user,
            };

        case 'ADD_to_Basket':
            return{
                ...state,
                basket: [...state.basket, action.item]
            };

        case 'Remove_from_Basket':
            let newbasket = [...state.basket];

            const index = state.basket.findIndex(
                (basketItem) => basketItem.id===action.id
            );
            
            if(index >= 0){
                newbasket.splice(index,1);
            }
            else{
                console.warn(`can not remove product (id: ${action.id}) as its not present in basket `);
            }
            return{
                ...state,
                basket: newbasket
            };

        default:
            return state;   
    }

}

export default reducer;
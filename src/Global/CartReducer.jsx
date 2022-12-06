export const CartReducer = (state, action) => {
  
  const {shoppingCart, totalPrice, qty} = state;
  let product;
  let index;
  let updatedprice;
  let updatedQty;
  switch (action.type) {
    case 'ADD TO CART':
      const check=shoppingCart?.find(product=>product.id===action.id)
      if(check){
        return state;
      }else{
        product=action.product;
        product['qty']=1;
        updatedQty=qty+1;
        updatedprice=totalPrice+product.price;
        return{shoppingCart:[product, ...shoppingCart],totalPrice:updatedprice,qty: updatedQty}
      }
     
      case 'INC':
        product=action.cart;
        product.qty=product.qty+1;
        updatedprice=totalPrice+product.price;
        updatedQty=qty+1;
        index=shoppingCart.findIndex(cart=>cart.id===action.id);
        shoppingCart[index]=product;
        return {shoppingCart:[...shoppingCart],totalPrice:updatedprice,qty:updatedQty}
      case 'DEC':
        product=action.cart;
        if(product.qty>1){
          product=action.cart;
          product.qty=product.qty-1;
          updatedprice=totalPrice-product.price;
          updatedQty=qty-1;
          index=shoppingCart.findIndex(cart=>cart.id===action.id);
          shoppingCart[index]=product;
          return {shoppingCart:[...shoppingCart],totalPrice:updatedprice,qty:updatedQty}
        }
        else{
          return state;
        }
       case 'DELETE':
        const filtered=shoppingCart.filter(product=>product.id!==action.id);
        product=action.cart;
        updatedQty=qty-product.qty;
        updatedprice=totalPrice-product.price*product.qty;
        return {shoppingCart:[...filtered],totalPrice:updatedprice,qty:updatedQty}
    default:
        return state;
  }
};

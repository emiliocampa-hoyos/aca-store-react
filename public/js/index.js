var someProducts = state.products;
var cartItems = state.numberOfItemsInCart;

ReactDOM.render(<div> <App productDetails = {someProducts} cart = {cartItems}/> </div>,
    document.getElementById("root"));
var someProducts = state.products;
var cartItems = state.numberOfItemsInCart;

ReactDOM.render(<div><Header numberOfItemsInCart = {cartItems} /> <App productDetails = {someProducts}/> <Footer /></div>,
    document.getElementById("root"));
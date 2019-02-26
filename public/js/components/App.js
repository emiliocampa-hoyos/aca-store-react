class App extends React.Component {

    state = {
        shoppingCart: []
    }

    addItemToCart = (product) => {
        this.setState(() => {
            this.state.shoppingCart.push(product);
            console.log(this.state.shoppingCart);
            return {shoppingCart: this.state.shoppingCart};
        });
    }


    doCheckout = () => {

        console.log("About to chekout: " + this.state.shoppingCart);
        fetch('http://localhost:3001/products', {
            method: 'post',
            mode: "no-cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },            
            body: JSON.stringify(this.state.shoppingCart[0])
          }).then(function(response) {
              console.log("Done!");
              return response.json();
          });
    }

    render() {
        let products = this.props.productDetails;
        let productsDiv = [];
        productsDiv = products.map((product, i) => {
            return <ProductDetail addToCart = {this.addItemToCart} key = {i} products = {product} />
        });
        

        return (              
        <div className="App">
            <Header numberOfItemsInCart = {this.state.shoppingCart} />   
            <Checkout checkout = {this.doCheckout} />
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <p className="lead">Shop Name</p>
                        <div className="list-group">
                            <a href="#" className="list-group-item">Category 1</a>
                            <a href="#" className="list-group-item">Category 2</a>
                            <a href="#" className="list-group-item">Category 3</a>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <Carousel />
                        <div className="row">
                            {productsDiv}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>);
    }
}
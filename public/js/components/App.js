function App(props) {


    let products = props.productDetails;
    let productsDiv = [];
    productsDiv = products.map((product, i) => {
        return <ProductDetail key = {i} products = {product} />
    });
    

    return (        
    <div className="App">
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
    </div>);
}
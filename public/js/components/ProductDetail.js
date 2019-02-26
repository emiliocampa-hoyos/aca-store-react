function ProductDetail(props) {

    let product = props.products;

    return (
    <div className="col-sm-4 col-lg-4 col-md-4">
        <div className="thumbnail">
            <img src="http://placehold.it/320x150" alt=""/>
            <div className="caption">
                <h4 className="pull-right">{product.price}</h4>
                <h4><a href="#">{product.name}</a>
                </h4>
                <p>See more snippets like this online store item at <a target="_blank" href="http://www.bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.</p>

                    <button onClick={() => { props.addToCart(product);}}>Add To Cart</button>
            </div>
            <Rating reviews = {product.reviews} rating = {product.rating}/>
        </div>
    </div>);
}
function Checkout(props) {

    return (
        <div>
            <button onClick={() => { props.checkout();}}>Checkout</button>
        </div>
    );
}
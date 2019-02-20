function Rating(props) {
    let reviews = parseInt(props.reviews);
    let rating = parseInt(props.rating);

    let starsDiv = [];
    for (let i = 0; i < rating; i++) {
        starsDiv.push(<Star key = {i} />); 
    }

    return (
        <div className="ratings">
            <p className="pull-right">Reviews: {reviews}</p>
            <p>
                {starsDiv}    
            </p>
        </div>
    );
}
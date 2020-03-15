import React from 'react';

const ReviewItem = (props) => {
    console.log(props)
    const {name, quantity, key, price} = props.product;
    const reviewItemStyle = {
        borderBottom:'1px solid lightgray',
        marginBoottom: '5px',
        paddingBottom: '5px',
        marginLeft: '200px'
    }
    return (
        <div style={reviewItemStyle}>
            <h4>{name} </h4>
            <p>Quantity: {quantity}</p>
            <p><small>${price}</small></p>
            <button
                className="main-button"
                onClick = {() => props.removeProduct(key)}
            >Remove Item</button>
        </div>
    );
};

export default ReviewItem;
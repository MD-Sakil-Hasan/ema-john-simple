// import React from 'react';
// import { useParams } from 'react-router-dom';
// import fakeData from '../../fakeData';
// import Product from '../Product/Product';

// const ProductDetail = () => {
//     const {productKey} = useParams();
//     const product = fakeData.find(pd => pd.key === productKey);
//     console.log(product)
//     return (
//         <div>
//             <h1>Product Detail</h1>
//             <h3>Product id: {productKey}</h3>
//             <Product showAddToCart={false} product={product}></Product>
//         </div>
//     );
// };

// export default ProductDetail;


import React, { Component } from 'react';

class ProductDetail extends Component {
    constructor(params) {
        super(params)
        this.state = {
            count: 0,
            products: []
        }
    }

    componentDidMount() {
        fetch('')
        .then(data => data.json())
        .then(products => {
            this.setState({products: products})
        })
    }

    handleClick(){
        const newCount = this.state.count + 1;
        this.state({count: newCount})
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default ProductDetail;
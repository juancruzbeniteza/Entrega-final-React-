import React, { Component } from 'react';
import Title from '../Title/Title';
import Product from '../Items/Items';
import { ProductConsumer } from '../../context';

export default class ProductList extends Component {

        render() {
            return (
                <React.Fragment>
                    <div className="py-5">
                        <div className="container">
                            <Title name="our" title="products" />

                            <div className="row">
                                <ProductConsumer>
                                    {(value) => {
                                        return value.products.map(product => {
                                            return <Product key={product.id} product={product} />
                                        });
                                    }}
                                </ProductConsumer>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
}

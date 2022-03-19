import React from 'react';
import ProductItem from './ProductItem';
import styles from './ProductsList.module.scss';

export default function ProductsList(props) {
    return (
        <div className={styles.container}>
            <ul>
                {props.products.map(product => 
                    <ProductItem key={product.id}
                        product={product}
                        onDeleteProduct={props.onDeleteProduct} />
                )}
            </ul>
        </div>
    )
}
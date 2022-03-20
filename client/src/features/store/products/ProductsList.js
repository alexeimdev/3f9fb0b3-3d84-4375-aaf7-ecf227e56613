import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editProduct, deleteProduct } from './productsSlice';
import ProductItem from './ProductItem';
import styles from './ProductsList.module.scss';

export default function ProductsList(props) {

    const dispatch = useDispatch();

    const [filter, setFilter] = useState();

    const products = useSelector(state => filter 
        ? state.products.products.filter(p => p.name.includes(filter) || p.description.includes(filter))
        : state.products.products);
    
    function handleDeleteProduct(productId) {
        dispatch(deleteProduct(productId));
    }

    function handleEditProduct(productId) {
        dispatch(editProduct(productId));
    }

    function handleFilterChange(e) {
        setFilter(e.target.value);
    }

    return (
        <div className={styles.container}>
            <div>
                <input type="search" value={filter} onChange={handleFilterChange} />
            </div>
            <ul>
                {products?.map(product => 
                    <ProductItem key={product.id}
                        product={product}
                        onEditProduct={handleEditProduct}
                        onDeleteProduct={handleDeleteProduct} />
                )}
            </ul>
        </div>
    )
}
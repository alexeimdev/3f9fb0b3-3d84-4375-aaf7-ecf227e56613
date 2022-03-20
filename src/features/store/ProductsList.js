import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editProduct, deleteProduct } from './storeSlice';
import ProductItem from './ProductItem';
import styles from './ProductsList.module.scss';

export default function ProductsList(props) {

    const dispatch = useDispatch();
    const storeState = useSelector(state => state.store);
    
    useEffect(() => {
        // TODO: check if the products refresh where changed (useSelector)
    }, [storeState?.products])

    function handleDeleteProduct(productId) {
        dispatch(deleteProduct(productId));
    }

    function handleEditProduct(productId) {
        dispatch(editProduct(productId));
    }

    return (
        <div className={styles.container}>
            <ul>
                {storeState.products?.map(product => 
                    <ProductItem key={product.id}
                        product={product}
                        onEditProduct={handleEditProduct}
                        onDeleteProduct={handleDeleteProduct} />
                )}
            </ul>
        </div>
    )
}
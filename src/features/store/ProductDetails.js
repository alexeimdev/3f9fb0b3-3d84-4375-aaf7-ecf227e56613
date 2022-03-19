import React from 'react';
import styles from './ProductDetails.module.scss';

export default function ProductDetails(props) {

    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleNameChange(e) {
        props.onNameChange(e.target.value)
    }

    function handleDescriptionChange(e) {
        props.onDescriptionChange(e.target.value)
    }

    function handlePriceChange(e) {
        props.onPriceChange(e.target.value)
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label> Name </label>
                    </div>
                    <div>
                        <input
                            type="text"
                            maxLength={30}
                            required 
                            value={props.productForm?.name}
                            onChange={handleNameChange} />
                    </div>
                </div>
                <div>
                    <div>
                        <label> Description </label>
                    </div>
                    <div>
                        <textarea
                            maxLength={200}
                            rows={10}
                            cols={50}
                            value={props.productForm?.description}
                            onChange={handleDescriptionChange} />
                    </div>
                </div>
                <div>
                    <div>
                        <label> Price </label>
                    </div>
                    <div>
                        <input
                            type="number"
                            min={0}
                            required
                            value={props.productForm?.price}
                            onChange={handlePriceChange} />
                    </div>
                </div>
                <div className={styles.saveFormButtonWrapper}>
                    <button type="submit" >Save</button>
                </div>
            </form>
        </div>
    )
}
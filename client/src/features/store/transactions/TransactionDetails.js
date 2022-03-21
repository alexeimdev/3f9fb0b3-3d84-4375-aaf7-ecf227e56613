import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    saveTransaction,
    setTransactionName,
    setTransactionDescription,
    setTransactionPrice,
} from './transactionsSlice';
import styles from './TransactionDetails.module.scss';

export default function TransactionDetails(props) {

    const dispatch = useDispatch();
    const transactionForm = useSelector(state => state.transactions?.transactionForm);

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(saveTransaction());
    }

    function handleNameChange(e) {
        dispatch(setTransactionName(e.target.value));
    }

    function handleDescriptionChange(e) {
        dispatch(setTransactionDescription(e.target.value));
    }

    function handlePriceChange(e) {
        dispatch(setTransactionPrice(e.target.value));
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
                            value={transactionForm?.name}
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
                            value={transactionForm?.description}
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
                            value={transactionForm?.price}
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
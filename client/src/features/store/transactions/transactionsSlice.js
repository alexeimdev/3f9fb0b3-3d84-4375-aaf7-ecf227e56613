import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

// ID (number, unique)
// Name (string, up to 30 characters, mandatory)
// Description (string, up to 200 characters, optional)
// Price (number, larger than zero, mandatory)
// Creation Date (Date, mandatory)

const initialTransactions = [
    { id: nanoid(), name: 'aaa', description: 'aaa111', price: 100, creationDate: Date.now() },
    { id: nanoid(), name: 'bbb', description: 'bbb222', price: 200, creationDate: Date.now() },
    { id: nanoid(), name: 'ccc', description: 'ccc333', price: 300, creationDate: Date.now() },
    { id: nanoid(), name: 'ddd', description: 'ddd444', price: 400, creationDate: Date.now() },
]

const initialTransactionForm = {
    id: '',
    name: '',
    description: '',
    price: '',
}

const initialState = {
    transactions: localStorage.getItem("storeDemoTransactions") || initialTransactions,
    transactionForm: initialTransactionForm,
}

export const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        setTransactions: (state, action) => {
            state.transactions = action.payload;
        },
        addTransaction: (state, action) => {
            state.transactionForm = initialTransactionForm;
        },
        editTransaction: (state, action) => {
            const transaction = state.transactions.find(transaction => transaction.id === action.payload);
            state.transactionForm = transaction;
        },
        deleteTransaction: (state, action) => {
            state.transactions = state.transactions.filter(transaction => transaction.id !== action.payload);
        },
        saveTransaction: (state, action) => {
            if (state.transactionForm?.id) {
                // edit mode
                const transactions = state.transactions.map(transaction => {
                    return transaction.id === state.transactionForm.id ? state.transactionForm : transaction;
                });
                state.transactions = [...transactions];
                state.transactionForm = initialTransactionForm;
            } else {
                // new mode
                const isTransactionNameExists = state.transactions.findIndex(transaction => transaction.name == state.transactionForm.name) > -1;
                if (!isTransactionNameExists) {
                    state.transactionForm.id = nanoid();
                    state.transactionForm.creationDate = Date.now();
                    state.transactions.push(state.transactionForm);
                    state.transactionForm = initialTransactionForm;
                } else {
                    console.error('transaction name is already exists!');
                }

            }
        },
        setTransactionName: (state, action) => {
            state.transactionForm.name = action.payload;
        },
        setTransactionDescription: (state, action) => {
            state.transactionForm.description = action.payload;
        },
        setTransactionPrice: (state, action) => {
            state.transactionForm.price = action.payload;
        },
    }
})

export const {
    setTransactions,
    addTransaction,
    editTransaction,
    deleteTransaction,
    saveTransaction,
    setTransactionName,
    setTransactionDescription,
    setTransactionPrice,
} = transactionsSlice.actions;

export default transactionsSlice.reducer;
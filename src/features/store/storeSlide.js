import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

// ID (number, unique)
// Name (string, up to 30 characters, mandatory)
// Description (string, up to 200 characters, optional)
// Price (number, larger than zero, mandatory)
// Creation Date (Date, mandatory)

const initialProducts = [
    { id: nanoid(), name: 'aaa', description: 'aaa111', price: 100, creationDate: new Date() },
    { id: nanoid(), name: 'bbb', description: 'bbb222', price: 200, creationDate: new Date() },
    { id: nanoid(), name: 'ccc', description: 'ccc333', price: 300, creationDate: new Date() },
    { id: nanoid(), name: 'ddd', description: 'ddd444', price: 400, creationDate: new Date() },
]

const initialProductForm = {
    id: '',
    name: '',
    description: '',
    price: NaN,
    isValid: false,
}

const initialState = {
    products: localStorage.getItem("storeDemoProducts") || initialProducts,
    selectedProductId: '',
    productForm: initialProductForm,
}

export const storeSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        addProduct: (state, action) => {
            state.productForm = initialProductForm;
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload);
        },
        saveProduct: (state, action) => {

            if (state.selectedProductId) {
                // edit mode
                const products = state.products.map(product => {
                    return product.id === action.payload.id ? action.payload : product;
                });
                state.products = [...products];
            } else {
                // new mode
                state.productForm.id = nanoid();
                state.productForm.creationDate = new Date();
            }
        },
        setProductName: (state, action) => {
            state.productForm.name = action.payload;
        },
        setProductDescription: (state, action) => {
            state.productForm.description = action.payload;
        },
        setProductPrice: (state, action) => {
            state.productForm.price = action.payload;
        },
        setSelectedProduct: (state, action) => {
            state.selectedProductId = action.payload;
        },
    }
})

export const {
    setProducts,
    addProduct,
    deleteProduct,
    saveProduct,
    setProductName,
    setProductDescription,
    setProductPrice,
    setSelectedProduct,
} = storeSlice.actions;

export default storeSlice.reducer;
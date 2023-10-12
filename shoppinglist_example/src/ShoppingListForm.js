import { useState } from 'react';

export const ShoppingListForm = ({addItem}) => {
    const [formData, setFormData] = useState({ product: "", quantity: 0 });
    const [productisValid, setProductIsValid] = useState(false);

    const validate = () => {
        if(formData.product.length === 0) {
            setProductIsValid(false);
        } else {
            setProductIsValid(true);
        }
    };

    const handleChange = (evt) => {
        if(evt.target.name === "product") {
            validate(evt.target.value);
        }
        setFormData(currData => {
            return {
                ...currData,
                [evt.target.name] : evt.target.value
            }
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(productisValid) {
            addItem(formData);
            setFormData({product: "", quantity: 0});
        }   
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor='product'>Product Name</label>
            <input 
                type="text" 
                placeholder='Product name' 
                name='product' 
                id='product' 
                onChange={handleChange}
                value={formData.product}
            />
            {!productisValid && (
                <p style={{color: "red"}}>Product cannot be empty</p>
            )}

            <label htmlFor='quantity'>Quantity</label>
            <input 
                type="number" 
                placeholder='1' 
                name='quantity' 
                id='quantity' 
                onChange={handleChange}
                value={formData.quantity}
            />
            
            <button disabled={!productisValid}>Add Item</button>

        </form>
    )
};
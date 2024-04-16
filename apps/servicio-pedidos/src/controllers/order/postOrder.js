import { products } from '../../dbmock/products'
import axios from 'axios'

/**
 * Echo endpoint
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
const postOrder = async (req, res) => {
    const {user, productsCart, timestamp, id} = req.body
    const totalPrice = productsCart.reduce((acc, pr) => {
        const {refId, quantity} = pr
        const productPrice = products[refId].price || 0
        return acc + (productPrice*quantity)
    }, 0)

    const requestPayment = await axios.post('http://localhost:3001/pay-order', {
        user,
        total: totalPrice,
        timestamp,
        id
    })

    res.json({
        ...requestPayment.data,
        productsCart,
        timestamp,
        id
    })
}

export default postOrder
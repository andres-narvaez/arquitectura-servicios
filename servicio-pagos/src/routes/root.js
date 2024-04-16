import express from 'express';
import getRoot from '../controllers/root/getRoot';
import postRoot from '../controllers/root/postRoot';
import postPayment from '../controllers/payment/postPayment'

const root = express.Router()

root.get('/', getRoot)
root.post('/', postRoot)
root.post('/pay-order', postPayment)

export default root
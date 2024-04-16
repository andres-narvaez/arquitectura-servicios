import express from 'express';
import getRoot from '../controllers/root/getRoot';
import postRoot from '../controllers/root/postRoot';
import postOrder from '../controllers/order/postOrder';

const root = express.Router()

root.get('/', getRoot)
root.post('/', postRoot)
root.post('/new-order', postOrder)

export default root
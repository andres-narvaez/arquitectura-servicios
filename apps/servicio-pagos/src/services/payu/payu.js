import { v4 as uuidv4 } from 'uuid'

function payu({id, total, user}) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            status: 'success',
            paymentId: uuidv4(),
            orderDetails: {
                id,
                total,
                user
            }
          });
        }, 500); 
      });
}

export default payu
import payu from '../../services/payu/payu'

/**
 * Echo endpoint
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
const postPayment = async (req, res) => {
    const {id, total, user } = req.body
    const payuResponse = await payu({id, total, user})
    res.json(payuResponse)
}

export default postPayment
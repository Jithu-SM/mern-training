const jwt = require('jsonwebtoken')

const createToken = (id, role) => {
    try {
        const token = jwt.sign(
            { id: id, role: role }, 
            process.env.JWT_SECRET_KEY,
            { expiresIn: '1h' }
        )
        return token
    } catch (error) {
        console.log(error)
        throw error
    }
}

module.exports = { createToken }
import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
    //retrieve token from cookies
    const token = req.cookies["auth_token"]
    if(!token){
        return res.status(401).send({ error:'Unathorized'})
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.userId = decoded.userId
        next()
    } catch (error) {
        return res.status(401).send({ error:'Invalid token'})
    }
}

export default verifyToken
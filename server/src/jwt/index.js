import jwt from "jsonwebtoken";

const generateAccessToken = (customer) => {
    return jwt.sign(
        {
            id: customer._id,
            role: customer.role,
            admin: customer.admin,
        },
        process.env.JWT_ACCESS_KEY,
        {
            expiresIn: "1h",
        }
    );
};
const generateRefreshToken = (customer) => {
    return jwt.sign(
        {
            id: customer._id,
            admin: customer.admin,
            role: customer.role,
        },
        process.env.JWT_REFRESH_KEY,
        {
            expiresIn: "1d",
        }
    );
};
module.exports = { generateAccessToken, generateRefreshToken };

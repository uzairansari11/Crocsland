import axios from "axios";
export const getSingleProduct = async (productID) => {

    try {

        const res = await axios.get(`https://crocsland.onrender.com/products/${productID}`)

        return res.data

    } catch (error) {

        console.log(error)

    }

};
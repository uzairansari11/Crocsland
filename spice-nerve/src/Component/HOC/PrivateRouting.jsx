import { useSelector } from "react-redux"


export const PrivateRouting = ({ children }) => {
    const { isAuth } = useSelector((store) => store.authReducer)
    if (isAuth) {
        return children
    } else {


    }
}
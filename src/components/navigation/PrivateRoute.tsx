import { Navigate } from "react-router-dom";
import { LocalStorageKeys } from "../../providers/LocalStorage"

interface Props {
    filter: () => boolean;
    children: JSX.Element;
}

export const PrivateRoute = ({ children, filter }: Props) => {
    const isLoggued = Boolean(localStorage.getItem(LocalStorageKeys.IS_LOGIN));

    return (isLoggued && filter()) ? children : <Navigate to="/login" />;
}

import { Route, Navigate } from "react-router-dom";
import useAuth from "../Auth/useAuth";

export default function PublicRoute(props) {
    const {isLogget} = useAuth();

    if(isLogget()) return <Navigate replace to="/"/>

    return (
        <Route {...props}/>
    )
}



// function PublicRoute({children, isAuthenticated, ...rest }) {
//     const {isLogget} = useAuth();
//     return (
//       <Route {...rest}
//         render={
//           ({ location }) => (
//             !isLogget ? (
//               children
//             ) : (
//               <Navigate
//                 to={{
//                   pathname: '/home',
//                   state: { from: location }
//                 }}
//               />
//             ))
//         }
//       />
//     );
//   }
  
// export default PublicRoute;
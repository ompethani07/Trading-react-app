import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
// import ErrorPage from "./error-page";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Support from './pages/support/Support';
import TransactionPage from './pages/transaction/TransactionPage';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Dashboard/>,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/transaction",
    element:<TransactionPage/>
  },
  {
  path: "/support",
  element:<Support/>
  },
]);
function App() {
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

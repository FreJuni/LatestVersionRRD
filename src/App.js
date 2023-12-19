import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layouts/Main";
import { About, Home, Products, Product } from "./pages";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "",
    element: <Main />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "products", element: <Products /> },
      { path: "product/:title", element: <Product /> },
    ],
  },
]);

function App() {
  return (
    <div className="main-con">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

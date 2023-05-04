import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import Header from './components/Header/Header';
import { theme } from './theme/theme';
import Footer from './components/Footer/Footer';
import Product from './pages/Product/Product';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './pages/Error/Error';
import Search from './pages/Search/Search';
import Cart from './pages/Cart/Cart';
import System from './pages/System/System';
import Catalog from './pages/Catalog/Catalog';
import Home from './pages/Home/Home';



const Root = () => {
  return (
    <div className="App">
      <div style={{ height: '156px' }}></div>
      <Header />
      <div>
        <Product />
      </div>
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/system",
    element: <System />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/catalog",
    element: <Catalog />,
  },
  {
    path: "404",
    element: <Error />,
  },
  {
    path: "search",
    element: <Search />,
  },
  {
    path: "cart",
    element: <Cart />,
  },

]);

function App() {
  const path = window.location.href.split('/').slice(-1)[0]

  return (
    <ChakraProvider theme={theme}>

      <div className={path === '' ? "AppWhite" : 'App'}>
        <div style={{ height: '156px' }}></div>
        <Header />
        <div>
          <RouterProvider router={router} />
        </div>
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;

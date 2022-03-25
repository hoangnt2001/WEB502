import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

import type { ProductType } from './types/product';
import { add, list, remove, update } from './API/products';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import HomePage from './Page/Homepage';
import ProductPage from './Page/ProductPage';
import AdminLayout from './Page/layout/AdminLayout';
import WebsiteLayout from './Page/layout/WebsiteLayout';
import Dashboard from './Page/DashBoard';
import ProductManager from './Page/ProductManager';
import ProductDetail from './Page/ProductDetails';
import ProductAdd from './Page/ProductAdd';
import ProductEdit from './Page/ProductEdit';
import PrivateRouter from './components/PrivateRouter';
import SignIn from './Page/SignIn';
import SignUp from './Page/SignUp';

function App() {
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    const getProducts = async () => {
        const { data } = await list();
        setProducts(data);
    }
    getProducts();
  }, []);

  // Add Product
  const onHandleAdd = async (product: any) => {
    const {data} = await add(product);
    setProducts([...products, data]);
  }
  const onHandleRemove = async (id: number) => {
    remove(id);
    // rerender
    setProducts(products.filter(item => item.id !== id));
  }
  const onHandleUpdate = async (product: ProductType) => {
    try {
      // api
       const {data} = await update(product);
       // reREnder - 
       // Tạo ra 1 vòng lặp, nếu item.id == id sản phẩm vừa cập nhật (data), thì cập nhật ngược lại giữ nguyên
       setProducts(products.map(item => item.id === data.id ? product : item))
    } catch (error) {
      
    }
  }
  return (
    <div className="App">
        <header>
          <ul>
            <li><NavLink to="/">Home Page</NavLink></li>
            <li><NavLink to="/product">Product</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<WebsiteLayout />}>
                <Route index element={<HomePage />} />
                <Route path="product">
                  <Route index element={<ProductPage/>}/>
                  <Route path=":id" element={<ProductDetail />} />
                </Route>
                 
            </Route>
            {/* SIGNIN-SIGNUP */}
            <Route path="/SignUp" element = {<SignIn/>}>
            </Route>
            <Route path="/SignIn" element = {<SignUp/>}>
            </Route>   
            <Route path="admin" element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
                <Route index element={<Navigate to="dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="product">
                  <Route index  element={<ProductManager products={products} onRemove={onHandleRemove} />} />
                  <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate}/>} />
                  <Route path="add" element={<ProductAdd onAdd={onHandleAdd} />} />
                </Route>
            </Route>
            <Route path="login" element={<h1>Login page</h1>} />
          </Routes>
        </main>
    </div>
  )
}

export default App





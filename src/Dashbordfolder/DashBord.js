import React from 'react'
import Sidebar from './Sidebar/Sidebar';
import Topbar from './Topbar/Topbar';
import '../App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route

} from "react-router-dom";
import UserList from './pages/home/UserList/UserList';
import Home from './pages/home/Home';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';



function DashBord() {
    return (

        <Router>
            <Topbar />
            <div className='containers'>
                <Sidebar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/users">
                        <UserList />
                    </Route>
                    <Route path="/user/:userid">
                        <User />
                    </Route>
                    <Route path="/newUser">
                        <NewUser />
                    </Route>
                    <Route path="/productsList">
                        <ProductList/>
                    </Route>
                    <Route path="/product">
                        <Product/>
                    </Route>
                    <Route path="/newProduct">
                        <NewProduct/>
                    </Route>
                </Switch>

            </div>
        </Router>
    )
}
export default DashBord;

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import AddProduct from './components/AddProduct/AddProduct';
import AuthProvider from './components/context/AuthProvider';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';
import ManageOrder from './components/ManageOrder/ManageOrder';
import MyOrders from './components/MyOrders/MyOrders';
import Orders from './components/Orders/Orders';
import Payment from './components/Payment/Payment';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Review from './components/Review/Review';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/shop'>
              <Shop></Shop>
            </Route>
            <PrivateRoute path='/myOrders'>
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path='/review'>
              <Review></Review>
            </PrivateRoute>
            <PrivateRoute path='/manageOrders'>
              <ManageOrder></ManageOrder>
            </PrivateRoute>
            <PrivateRoute path='/payment'>
              <Payment></Payment>
            </PrivateRoute>
            <PrivateRoute path='/addProduct'>
              <AddProduct></AddProduct>
            </PrivateRoute>
            <PrivateRoute path='/makeAdmin'>
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
            <PrivateRoute path='/orders/:id'>
              <Orders></Orders>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

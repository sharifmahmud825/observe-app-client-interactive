import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import AuthProvider from './components/context/AuthProvider';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MyOrders from './components/MyOrders/MyOrders';
import Orders from './components/Orders/Orders';
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
            <Route path='/myOrders'>
              <MyOrders></MyOrders>
            </Route>
            <Route path='/review'>
              <Review></Review>
            </Route>
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

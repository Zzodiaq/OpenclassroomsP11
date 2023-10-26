import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store.js'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from "./pages/Home/index.jsx";
import User from './pages/User/user.jsx';
import Signin from './pages/Signin/signIn.jsx';
// import Error from './pages/Error/error.jsx';
import Nav from './components/Nav/nav.jsx';
import Footer from './components/Footer/footer.jsx';
// const root = ReactDOM.createRoot(document.getElementById('root'));

// const HeaderWraper = ({child}) => (
//   <>
//   <nav/>
//   {child}

//   </>
//   )

const router = createBrowserRouter([
  {
    path: "/",
    element : <><Nav /><Home /><Footer /></>
    // errorElement: <Error />,
  },
  {
    path: "/user",
    element : <><Nav/><User /><Footer/></>,
    // errorElement: <Error />,
  },
  {
    path: "/SignIn",
    element : <><Nav/><Signin /><Footer/></>,
    // errorElement: <Error />,
  }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

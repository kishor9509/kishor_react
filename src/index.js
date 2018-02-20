import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Hello extends React.Component{
    render(){
        return(
    <Router>
        <div>
          <ul className='header'>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/layout">About</Link>
                </li>
                <li>Product</li>
                <li>Service</li>
                <li>
                <Link to="/login">Login</Link>
                </li>
                <li>Signup</li>
          </ul>
        </div>
    </Router>
        )
    }
}
// class World extends React.Component{
//     render(){
//         return(
//             <p>World</p>
//         )
//     }
// }
// class HelloWorld extends React.Component{
//     render(){
//         return(
//             <div className='abc'>
//             <Hello/>
//             <World/>
//             </div>
//           ) }
// }
ReactDom.render(<Hello/>, document.getElementById('root'))
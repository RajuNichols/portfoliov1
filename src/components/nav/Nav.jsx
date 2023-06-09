import "./nav.css"
import React, {Component} from 'react'
import {MenuItems} from "../../navData"



class Navbar extends Component {
    state = {clicked:false}

    handleClick = () => {
        this.setState({clicked:!this.state.clicked})
    }

    render(){
        return(
            <nav className = "NavbarItems">
                <h1 className = "navbar-logo">
                    <a href = "#home">Personal Portfolio</a> 
                </h1>
                <div className="menu-icon" onClick = {this.handleClick}>
                    <i className = {this.state.clicked ?'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <u className = {this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item,index) =>{
                        return (
                           <li key = {index}><a className={item.cName} href={item.url}>{item.title}</a></li> 
                        )
                    })}
                    
                </u>
            </nav>

        )
    }
}

export default Navbar
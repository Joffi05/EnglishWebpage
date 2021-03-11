import React from 'react'
// import logo from './Logo.jpg'
// import { FaSearch } from 'react-icons/fa'

const Header = () => {
    return (
        <header style={HeaderStyle}>
            {/* <img src={logo} alt="Logo" style={LogoStyle}/> */}
            {/* <i className="input-group-prepend"><FaSearch/></i> */}
            <input style={InputStyle}placeholder="Search..."></input>
        </header>
    )
}
const HeaderStyle = {
    backgroundColor: 'white',
    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.5)',
    padding:'1px',
    margin:'0',
}
const LogoStyle = {
    width: '60px',
}
const InputStyle ={
    padding: '15px',
    width: '30%',
    margin:'12px',
    marginLeft: '30%',
    position: 'absolute',
    fontSize: '18px',
}
export default Header

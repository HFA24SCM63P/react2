import React from "react"
import ReactDOM from "react-dom/client"

const Logo = () => {
    return <img src="https://img.icons8.com/?size=100&id=dcNXeTC0SjGX&format=png&color=000000" id="logo"/>
}

const SearchBar = () => {

}

const UserIcon = () => {

}

const NavBar = () => {
    return (
        <div id="NavBar">
            <Logo />
            <SearchBar />
            <UserIcon />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<NavBar />)
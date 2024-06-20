import React from "react"
import ReactDOM from "react-dom/client"

const Logo = () => {
    return <div><img src="https://img.icons8.com/?size=100&id=dcNXeTC0SjGX&format=png&color=000000" id="logo" /></div>
}

const SearchBar = () => {
    return <div><input type="text" placeholder="Search..." id="searchBar" /></div>
}

const UserIcon = () => {
    return <div><img src="https://img.icons8.com/?size=100&id=2yC9SZKcXDdX&format=png&color=000000" id="user-icon" /></div>
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
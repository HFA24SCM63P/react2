import React from "react"
import ReactDOM from "react-dom"


const NavBar = () => {
    (
        <div>
            <Logo />
            <SearchBar />
            <UserIcon />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
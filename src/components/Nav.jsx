import React from "react";
import "./Nav.css"

class Header extends React.Component{

    render() {
        return(
            <div id="navigation">
                <div id="navigation-1">
                    <div id="logo">
                        <img src={require("../asset/logo.jpg")} alt="img" width="70%"/>
                    </div>
                </div>
            </div>
        );
    }

}

export default Header;

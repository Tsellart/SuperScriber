import React from "react";
import {Navbar} from "react-materialize"


function Navbar() {
    return(
        <nav>
            <div className="nav-wrapper">
                <a href= "#" class="brand-logo">SuperScriber</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href= "#">Login</a></li>
                </ul>
            </div>
        </nav>
    )
}
import React from "react";
import {
    HashRouter,
    Link,
    Switch,
    Route,
} from "react-router-dom";
import index from '@pages/index.jsx'

export default function Router() {
    return (
        <HashRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/" component={index}/>
                </Switch>
            </div>
        </HashRouter>
    );
}

function Home() {
    return <h2>Home</h2>;
}
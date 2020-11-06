import React from "react";
import {
    HashRouter,
    Link,
    Switch,
    Route,
} from "react-router-dom";
import Index from '@pages/index.jsx'

{% for itm in list %}
    import {
import index from "@pages/index";

{itm}} from '@pages/{{itm}}.jsx'
{% endfor %}

export default function Router() {
    return (
        <HashRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        {% for itm in list %}
                            <li>
                                <Link to={{'/'+itm}}>{{ itm }}</Link>
                            </li>
                        {% endfor %}
                    </ul>
                </nav>
                <Switch>
                    <Route path="/" component={Index}/>
                    {% for itm in list %}
                    <li>
                        <Link to={{'/'+itm}}>{{ itm }}</Link>
                        <Route path={{itm}} component={{itm}}/>
                    </li>
                    {% endfor %}
                </Switch>
            </div>
        </HashRouter>
    );
}
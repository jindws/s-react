import React from "react";
import {
    HashRouter,
    Link,
    Switch,
    Route,
} from "react-router-dom";
import Index from '@pages/index'

{% for itm in List %}
import {{itm.name}} from '@pages/{{itm.path}}'
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
                        {% for itm in List %}
                            <li>
                                <Link to='{{itm.name}}'>{{ itm.name }}</Link>
                            </li>
                        {% endfor %}
                    </ul>
                </nav>
                <Route path="/" exact component={Index}/>
                {% for itm in List %}
                    <Route path='/{{itm.name}}' component={ {{itm.name}} }/>
                {% endfor %}
            </div>
        </HashRouter>
    );
}
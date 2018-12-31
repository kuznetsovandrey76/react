import React from 'react';
import {render} from 'react-dom';

function HelloWorld() {
    return (
        <div>
            <h3>Hello World</h3>
            <p>Welcome to my react web page</p>
        </div>
    )
}

render(<HelloWorld />, document.getElementById('root'));
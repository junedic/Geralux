import React from 'react';
import './App.scss';
import {Header} from '../containers/Header'
import {Body} from '../containers/Body'

function App(props:any) {
    return (
        <div className="App">
            <header className="App-header">

            </header>
            <body className={"App-body"}>
                <div className={"global"}>
                    <Header />
                    <Body />
                </div>
            </body>
        </div>
    );
}

export default App;

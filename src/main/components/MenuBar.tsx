import React from "react";
import './styles/MenuBar.scss'
import logo from './images/geraluxlogo.jpeg'
import inverted from './images/image.png'

export class MenuBar extends React.Component {

    constructor(props:any) {
        super(props);
    }

    public render() {
        return(
            <div className={"menubar"}>
                <img src={inverted} className={"logo"}/>
                <table className={"menu-table"}>
                    <tr>
                        <td><a href={""}>Home</a></td>
                        <td><a href={""}>Über Uns</a></td>
                        <td><a href={""}>Immobilien Kaufen</a></td>
                        <td><a href={""}>Immobilien Verkaufen</a></td>
                        <td><a href={""}>Kontakt</a></td>
                    </tr>
                </table>
            </div>
        );
    }
}
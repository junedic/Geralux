import React from "react";
import './styles/Banner.scss'

export class Banner extends React.Component {

    constructor(props:any) {
        super(props);
    }

    public render() {
        return(
            <div className={"banner"}>
                <table className={"banner-table"}>
                    <tr><td></td></tr>
                    <tr>
                        <td>06202 76086-73</td>
                        <td>kontak@geralux-holding.de</td>
                        <td>Luisenstraße 18, 68782 Brühl</td>
                        <td className={"icons"}>Icons</td>
                    </tr>
                    <tr><td></td></tr>
                </table>
            </div>
        );
    }
}
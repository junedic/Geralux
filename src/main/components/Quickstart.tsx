import React from "react";
import './styles/Quickstart.scss'
import bau from './images/bauprojekt.jpg'
import invest from './images/investment.jpg'
import stonks from './images/anlage.jpg'
import home from './images/eigenheim.jpg'

export class Quickstart extends React.Component<any, any> {

    constructor(props:any) {
        super(props);
    }

    private generate_quick_element(img:string, title:string) {
        return(
          <div className={"quick-element"}>
              <table>
                  <tr><td><img src={img}/></td></tr>
                  <tr><th>{title}</th></tr>
                  <tr><td><button onClick={() => {}}>MEHR ERFAHREN</button></td></tr>
              </table>
          </div>
        );
    }

    public render() {
        return(
          <div className={"quick-bar"}>
              {this.generate_quick_element(invest, "Unser Investment")}
              {this.generate_quick_element(stonks, "Ihre Kapitalanlage")}
              {this.generate_quick_element(home, "Ihr Eigenheim")}
              {this.generate_quick_element(bau, "Ihr Neubauprojekt")}
          </div>
        );
    }
}
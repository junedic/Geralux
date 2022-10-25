import React from "react";
import './styles/Header.scss'
import {MenuBar} from '../components/MenuBar'
import {Banner} from "../components/Banner";

export class Header extends React.Component {

    constructor(props:any)
    {
        super(props);
    }

    public render()
    {
        return(
          <div className={"global-header"}>
              <Banner />
              <MenuBar />
          </div>
        );
    }
}
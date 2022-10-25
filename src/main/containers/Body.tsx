import React from 'react'
import {SlideShow} from "../components/SlideShow";
import {Quickstart} from "../components/Quickstart";
import {MiniTitle} from "../components/MiniTitle";
import './styles/Body.scss'
import {SectionTitle} from "../components/SectionTitle";
import {Rationale} from "../components/Rationale";

export class Body extends React.Component {

    constructor(props:any)
    {
        super(props);
    }

    public render()
    {
        return(
            <div className={"global-body"}>
                <SlideShow />
                <Quickstart />
                <Rationale/>
            </div>
        );
    }
}
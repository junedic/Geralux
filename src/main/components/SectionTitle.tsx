import React from "react";
import './styles/SectionTitle.scss'

export class SectionTitle extends React.Component<any, any> {

    private readonly title:string;

    constructor(props:any) {
        super(props);
        this.title = props.title.toString();
    }

    public render() {
        return(
            <div className={"section-title"}>
                <h1>{this.title}</h1>
            </div>
        );
    }

}
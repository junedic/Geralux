import React from "react";
import './styles/MiniTitle.scss'

export class MiniTitle extends React.Component<any, any> {

    private readonly title:string;
    private readonly border:boolean;

    constructor(props:any) {
        super(props);
        this.title = props.title.toString();
        this.border = props.border;
        if(this.border == null) {
            this.border = false;
        }
    }

    public render() {
        return(
            <div className={"mini-title"}>
                <h3 className={(this.border)? "border" : "no-border"}>{this.title}</h3>
            </div>
        );
    }

}
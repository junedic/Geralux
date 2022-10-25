import React from "react";
import './styles/SlideShow.scss'
import { TransitionGroup } from 'react-transition-group' // ES6
import tunnel from './images/scraper-tunnel.jpg'
import night from './images/city-night.jpg'
import construction from './images/construction.jpg'
import stairs from './images/staircase.jpg'

export class SlideShow extends React.Component <{}, { title: String }> {

    private readonly slides: string[];
    private slide_idx: number;
    private timer: NodeJS.Timer | undefined;

    constructor(props:any) {
        super(props);
        this.slides = [tunnel, construction, stairs];
        this.slide_idx = 1;
        this.state = { title: new String(tunnel) };
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.next_slide(),
            10000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    private next_slide() {
        if(this.slide_idx == this.slides.length)
            this.slide_idx = 0;
        this.setState({title: this.slides[this.slide_idx++]});
    }

    public render() {
        return(
          <div className={"slideshow"}>
              <img src={this.state.title.toString()} className={"title-img"}/>
          </div>
        );
    }

}
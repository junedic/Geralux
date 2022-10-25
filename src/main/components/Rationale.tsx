import React from "react";
import './styles/Rationale.scss'
import './assets/texts.json'
import {MiniTitle} from "./MiniTitle";
import {SectionTitle} from "./SectionTitle";
import night from './images/city-night.jpg'
import spacing from "./Spacing";
import comfy from './images/comfy.jpg'
import windows from './images/windows.jpg'
import past from './images/past.jpg'

export class Rationale extends React.Component<any, any> {

    private readonly text;

    constructor(props:any) {
        super(props);
        this.text = require('./assets/texts.json');

    }

    private createMarkup(markup:string) {
        return { __html: markup };
    }

    public render() {
        return(
          <div className={"rationale"} lang={"en"}>
              <MiniTitle title={"unser markt"} border={true}/>
              <SectionTitle title={"was uns antreibt"}/>
              {spacing( 0.05, 0, window.innerWidth.valueOf(), "")}
              <div className={"section"}>
                  <div className={"image"}>
                      <img src={night}/>
                  </div>
                  <div className={"text-section"}>
                      <div className={"badstonks"}>
                          <div className={"stonks"}>
                              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                                  <path d="M6 42v-3.8l3-3V42Zm8.25 0V30.2l3-3V42Zm8.25 0V27.2l3 3.05V42Zm8.25 0V30.25l3-3V42ZM39 42V22.2l3-3V42ZM6 30.2v-4.25l14-13.9 8 8L42 6v4.25L28 24.3l-8-8Z"/>
                              </svg>
                          </div>
                          <div className={"descriptor"}>
                              <span>Aktien</span>
                              <span>Krypto</span>
                              <span>Edelmetalle</span>
                              <span>WÄhrung</span>
                              <span>Aktien</span>
                              <span>Krypto</span>
                              <span>Edelmetalle</span>
                              <span>WÄhrung</span>
                          </div>
                      </div>
                      <MiniTitle title={this.text.rationale.immo[0]}/>
                      <SectionTitle title={this.text.rationale.immo[1]}/>
                      <div className={"text"} dangerouslySetInnerHTML={this.createMarkup(this.text.rationale.immo[2])}/>
                  </div>
              </div>
              <div className={"section"}>
                  <div className={"text-section"}>
                      <MiniTitle title={this.text.rationale.vergangenheit[0]}/>
                      <SectionTitle title={this.text.rationale.vergangenheit[1]}/>
                      <div className={"text"}>{this.text.rationale.vergangenheit[2]}</div>
                  </div>
                  <div className={"image"}>
                      <img src={past}/>
                  </div>
              </div>
              <div className={"section"}>
                  <div className={"image"}>
                      <img src={comfy}/>
                  </div>
                  <div className={"text-section"}>
                      <MiniTitle title={this.text.rationale.zukunft[0]}/>
                      <SectionTitle title={this.text.rationale.zukunft[1]}/>
                      <div className={"text"}>{this.text.rationale.zukunft[2]}</div>
                  </div>
              </div>
              <div className={"section"}>
                  <div className={"text-section"}>
                      <MiniTitle title={this.text.rationale.lukrativ[0]}/>
                      <SectionTitle title={this.text.rationale.lukrativ[1]}/>
                      <div className={"text"}>{this.text.rationale.lukrativ[2]}</div>
                  </div>
                  <div className={"image"}>
                      <img src={windows}/>
                  </div>
              </div>
          </div>
        );
    }

}
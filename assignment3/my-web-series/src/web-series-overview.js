
import { LitElement, html, css} from "lit";
import '@lion/ui/define/lion-form.js'
import { LionButton, LionButtonReset, LionButtonSubmit } from '@lion/ui/button.js';


class WebSeriesOverview extends LitElement {

    // static get scopedElements() {
    //     'lion-button' = LionButton

    // }
    static styles = css`
    .alignCards{
        display: flex;   
        flex-wrap: wrap;
        justify-content: center;
    }
  `;

    static get properties() {
        return {
            series: { type: Array }
        };
    }

    constructor() {
        super();
    }

    render() {
        return html`
        <div class="alignCards">
        ${this.series.map((element) =>
            html`<webseries-card @remove-series="${this._removeSeries}"
            .title = ${element.title} .director = ${element.director}
            .stars = ${element.stars} .streamingOn = ${element.platform}></webseries-card>`
        )}
         </div> `;
    }

    _removeSeries(e) {
        let removedTitle = e.detail.title
        let newArr = []
        this.series.forEach(element => {
            console.log(element);
            if(element.title != removedTitle){
                newArr.push(element)
            }
          });
          this.series = newArr
      }
}


customElements.define("webseries-overview", WebSeriesOverview);


import { LitElement, html, css} from "lit";


class WebSeriesOverview extends LitElement {
    static styles = css`
    .alignCards{
        display: flex;   
        flex-wrap: wrap;
        justify-content: space-around;
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

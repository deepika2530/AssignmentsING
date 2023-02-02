
import { LitElement, html, css} from "lit";


class WebSeriesCard extends LitElement {
    static styles = css`
    .card{
        border: 5px solid black;
        margin: 2px;
        width:150px;
        height: 200px;
        background-color: LightGray;
    }
     
    @media screen and (max-width: 768px) {
        .card{
            border: 5px solid black;
            margin: 2px;
            width: 125px;
            height: 190px;
            background-color: LightGray;
        }
      }
      
  `;

    static get properties() {
        return {
            title: { type: String },
            director: { type: String },
            stars: { type: String },
            streamingOn: { type: Boolean }
        };
    }

    constructor() {
        super();
    }

    render() {

        return html`
        <div class="card ">
                <div class="card-body">
                    <h5>${this.title}</h5>
                    <p>${this.director}</p>
                    <p>${this.stars}</p>
                    <p>${this.streamingOn}</p>
                    <button @click=${() => this._removeSeries()}>Remove</button>
                </div>
            </div>`
       ;
    }

    _removeSeries() {
        this.dispatchEvent(new CustomEvent('remove-series', { detail: {title:this.title,director:this.director,stars:this.stars,platform:this.streamingOn} }));
      }
}


customElements.define("webseries-card", WebSeriesCard);

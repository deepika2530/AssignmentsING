
import { LitElement, html, css } from "lit";


class WebSeriesCard extends LitElement {
    static styles = css`
    .card{
        border: 5px solid #5E81AC;
        margin: 7px;
        width:150px;
        height: 200px;
        background-color: LightGray;
        border-radius: 4px;
    }

    button{
        background-color: white; 
        color: black; 
        border: 2px solid #5E81AC;
        text-align: center;
        padding-top: 2px;
        padding-bottom: 2px;
        border-radius: 2px;
        margin-bottom: 5px;
      }
      
      button:hover {
        background-color: #88C0D0;
        color: white;
      }

    .header {
        height: 20%;
        background: #88C0D0;
        color: white;
        text-align: center;
        padding-top:7px;
    }

    .container {
        padding: 2px 16px;
    }
     
    @media screen and (max-width: 768px) {
        .card{
            border: 5px solid #5E81AC;
            margin: 20px;
            width:150px;
            height: 200px;
            background-color: LightGray;
            border-radius: 4px;
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
                    <div class="header">
                        ${this.title}
                    </div>
                    <div class="container">
                    <p>${this.director}</p>
                    <p>${this.stars}</p>
                    <p>${this.streamingOn}</p>
                    <button @click=${() => this._removeSeries()}>Remove</button>
                    </div>
                
            </div>`
            ;
    }

    _removeSeries() {
        this.dispatchEvent(new CustomEvent('remove-series', { detail: { title: this.title, director: this.director, stars: this.stars, platform: this.streamingOn } }));
    }
}


customElements.define("webseries-card", WebSeriesCard);

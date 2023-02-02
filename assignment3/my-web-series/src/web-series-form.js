
import { LitElement, html, css } from "lit";


class WebSeriesForm extends LitElement {
  static styles = css`
    .alignForm{
        display : flex;
        flex-direction : column;
        align-items: center;
    }
    input{
        width: 150px;
    }

    h1{
      display: flex;
      justify-content: center;
    }

    button{
      margin-bottom: 5px;
    }
   
@media screen and (min-width: 769px) {
  .split {
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 20px;
}
}

@media screen and (max-width: 768px) {
  .split {
  overflow-x: scroll;
  overflow-y: scroll;
  }
}

.left {
  left: 0;
  background-color: LightGray;
}

.right {
  right: 0;
  background-color: white;
}

  `;

  static get properties() {
    return {
      series: { type: Array }
    };
  }

  constructor() {
    super();
    this.series = [{ title: 'Friends', director: 'David Crane', stars: 'Courteney Cox', platform: 'Netflix' },
    { title: 'BigBangTheory', director: 'Mark Cendrowski', stars: 'Jim Parsons', platform: 'Netflix' },
    { title: 'YoungSheldon', director: 'Chuck Lorre', stars: 'Ian', platform: 'Prime' }];
  }

  get titleValue() {
    return this.shadowRoot.getElementById("title");
  }

  get title() {
    return this.titleValue.value
  }

  get directorValue() {
    return this.shadowRoot.getElementById("director");
  }

  get director() {
    return this.directorValue.value
  }

  get starsValue() {
    return this.shadowRoot.getElementById("stars");
  }

  get stars() {
    return this.starsValue.value
  }

  get streamingOnValue() {
    return this.shadowRoot.getElementById("streamingOn");
  }

  get streamingOn() {
    return this.streamingOnValue.value
  }

  render() {
    return html`  
       
        <div class="alignForm split left ">
        <h1>Add Series</h1>
        <label for="title">Title:</label>
          <input id="title" name="title" /><br>
        <label for="director">Director:</label>
          <input id="director" name="director" /><br>
        <label for="stars">Stars:</label>
          <input id="stars" name="stars" /><br>
        <label for="streamingOn">Streaming On:</label>
          <input id="streamingOn" name="streamingOn" /><br>
          <button @click="${() => this._addNewSeries()}">Add</button>
        </div>
        <div class="split right">
        <h1>My Series</h1>
          <webseries-overview .series=${this.series}></webseries-overview>
        </div>  `;
  }

  _addNewSeries() {
    let addedSeries = { title: this.title, director: this.director, stars: this.stars, platform: this.streamingOn }
    this.series = [...this.series, addedSeries];
  }

}


customElements.define("webseries-form", WebSeriesForm);

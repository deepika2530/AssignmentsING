
import { LitElement, html, css } from "lit";


class WebSeriesForm extends LitElement {
  static styles = css`
    .alignForm{
        display : flex;
        flex-direction : column;
        align-items: inherit;
        padding: 20px;
    }
    input, select{
      width: auto;
      margin-right: 70px;
      border: 1px solid #5E81AC;
      border-radius: 4px;
      height: 20px;
    }

    h1{
      display: flex;
      justify-content: center;
      color: #5E81AC;
    }

    button{
      margin-bottom: 5px;
      margin-top:10px;
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
  background-color: #8FBCBB;
  border-radius: 5px;
}

.right {
  right: 0;
  background-color: #8FBCBB;
  border-radius: 5px;
}

label{
  font-size: 20px;
  color: #5E81AC;
}

button{
  background-color: white; 
  color: black; 
  border: 2px solid #5E81AC;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-right: 70px;
  border-radius: 4px;
}

button:hover {
  background-color: #88C0D0;
  color: white;
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
    { title: 'BigBangTheory', director: 'Mark', stars: 'Jim Parsons', platform: 'Netflix' },
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
          <input id="title" name="title" placeholder="Enter title" /><br>
        <label for="director" >Director:</label>
          <input id="director" name="director" placeholder="Enter director" /><br>
        <label for="stars" >Stars:</label>
          <input id="stars" name="stars" placeholder="Enter stars"/><br>
          <label for="streamingOn" >Streaming Platform:</label>
          <select id="streamingOn">
              <option>Choose Platform</option>
              <option value="amazon-prime">Amazon Prime</option>
              <option value="netflix">Netflix</option>
              <option value="hulu">Hulu</option>
              <option value="hotstar">Hotstar</option>
              <option value="voot">Voot</option>
            </select><br>
          <button @click="${() => this._addNewSeries()}">Add New Series</button>
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

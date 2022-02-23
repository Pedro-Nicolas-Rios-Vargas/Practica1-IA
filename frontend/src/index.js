import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import imgPiedra from './img/piedras.png';
import imgPapel from './img/papel.png';
import imgTijera from './img/tijera.png';
import imgSpock from './img/spock.png';
import imgLagarto from './img/lagarto.png';

class MainView extends React.Component {

  constructor(props) {
    super(props);

    this.imagenes = {
        "piedra": imgPiedra,
        "papel": imgPapel,
        "tijera": imgTijera,
        "spock": imgSpock,
        "lagarto": imgLagarto,
    };

  }

  exampleOnClickListener() {
    console.log("Hoal");
    console.log("Sim");
  }

  render() {
    return (
      <div>
        <div className="resultado">
          <img src={ this.imagenes["piedra"] } alt="jugada del jugador"/>
          <img src={ this.imagenes["papel"] } alt="jugada del computador"/>
        </div>
        <div className="selector">
          <div className="selector-jugar">
            <button
              id="boton-jugar"
              onClick= { () => this.exampleOnClickListener() } >
              <p>Jugar!</p>
            </button>
          </div>
          <div className="selector-opciones">
            <button
              className="selector-opciones__button"
              onClick= { () => console.log("Selecciono piedra") }>
              <img src={ this.imagenes["piedra"] } alt="Piedra"/>
              <p>Piedra</p>
            </button>
            <button
              className="selector-opciones__button"
              onClick= { () => console.log("Selecciono papel") }>
              <img src={ this.imagenes["papel"] } alt="Papel"/>
              <p>Papel</p>
            </button>
            <button
              className="selector-opciones__button"
              onClick= { () => console.log("Selecciono tijera") }>
              <img src={ this.imagenes["tijera"] } alt="Tijera"/>
              <p>Tijera</p>
            </button>
            <button
              className="selector-opciones__button"
              onClick= { () => console.log("Selecciono spock") }>
              <img src={ this.imagenes["spock"] } alt="Spock"/>
              <p>Spock</p>
            </button>
            <button
              className="selector-opciones__button"
              onClick= { () => console.log("Selecciono lagarto") }>
              <img src={ this.imagenes["lagarto"] } alt="Lagarto"/>
              <p>Lagarto</p>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
    <MainView />,
    document.getElementById('root')
);

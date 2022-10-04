//import { getQueriesForElement } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import ABC from './MiComponente/MiComponente';

////////// VIRTUAL DOM //////////
/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <h1>Hola mundo</h1>
);
*/

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
function tick(){
  const element = (
    <div>
      <h1>Hola Mundo</h1>
      <h1>La hora es {new Date().toLocaleTimeString()}</h1>
    </div>
  );
  root.render(element);
}
setInterval(tick,1000);
*/
/*
const root = ReactDOM.createRoot(document.getElementById('root'));
const element = React.createElement(
  "h1",
  null,
  "Hola"
);
root.render(element);
*/

////////// COMPONENTES //////////
/*
function Header(){ return (<header>Cabecera</header>);}
function Footer(){ return (<footer>PiePagina</footer>);}
function Main(){ return (<main>ContenidoPrincipal</main>);}

function App(miParam){
  console.log(miParam);
  return (<div>{miParam}
    <Header/>
    <Main/>
    <Footer/>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(App('Se envio este parametro'));
*/


//////// Estilos ////////
/*
import './App.css';

function App(){
  const objetoEstilo={
    color:"green",
    fontSize: "40px"
  }
  return (
    <div>
          <h2 style={objetoEstilo}>Prueba1</h2>
          <h2 style={{color:"red"}}>Prueba2</h2>
          <h1>Prueba3</h1>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
*/

///// LISTAS ARREGLOS Y RECORRIDOS ///////
  ///// FORMA 2 //////  
/*
function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car brand={car} />)}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
*/

  ///// FORMA 2 //////
/*
function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
*/


//////// Componente SIN Estado ////////
/*
function Header(){ return (<header>Cabecera</header>);}
function Footer(){ return (<footer>PiePagina</footer>);}

function Main(props){
  const {children} = props;
  return (<main>{children}</main>);
}

function Tarjeta(props){
  const {nombre, edad} = props; 
  return(
    <ul>
      <li>Nombre:{nombre}</li>
      <li>Edad: {edad}</li>
    </ul>
  );
}

function App(){
  const objetoEstilo={
    color:"green",
    fontSize: "40px"
  }
  return (
    <div>
      <Header/>
      <Main>
          <h2>Prueba1</h2>
          <h2>Prueba2</h2>
          <h2>Prueba3</h1>
          <Tarjeta nombre="Carlos" edad="22"/>
          <Tarjeta nombre="Pedro" edad="33"/>
          <Tarjeta nombre="Oscar" edad="44"/>
      </Main>
      <Footer/>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
*/

/*
//////// Componente CON Estado ////////
class ComponenteConEstado extends React.Component{
  constructor(props){
    super(props);
    //Aquí se puede inicializar cualquier valor
    this.state ={
      contador:0,
      mensaje:""
    }
  };

  miSuma = () =>{
    
    if(this.state.contador % 2 == 0){
      console.log(this.state.contador);
      this.setState({
        contador : this.state.contador + 1,
        mensaje : "Impar"        
      });
    }
    else
      this.setState({
        contador : this.state.contador + 1,
        mensaje : "Par"        
      });

    
  }

  render(){
    return (
      <div>
        <h1 onClick={this.miSuma}>Click Encima para contar</h1>
        <h1>{this.state.contador}</h1>
        <h1>{this.state.mensaje}</h1>
      </div>
    );
  }
  


}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ComponenteConEstado/>);
*/


 /////////// HOOK useState ///////////
/*
import { useState } from "react";
//import ReactDOM from "react-dom/client";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);
*/

////////// HOOK useState Objects //////////
/*
import { useState } from "react";
//import ReactDOM from "react-dom/client";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });
  
  const updateColor = () => {
  //  setCar(previousState => {
  //    return { ...previousState, color: "blue" }
  return(setCar({
    brand: "Toyota",
    model: "Corolla",
    year: "2013",
    color: "azul"
    }));
  }

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);
*/
////////// HOOK useEffect //////////
import { useState, useEffect } from "react";
//import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []); // <- add empty brackets here

  return <h1>I've rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);

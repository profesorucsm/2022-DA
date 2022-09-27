import React from 'react';
import ReactDOM from 'react-dom/client';

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

/*
//////// Componente SIN Estado ////////
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
  return (
    <div>
      <Header/>
      <Main>
          <h2>Prueba1</h2>
          <h2>Prueba2</h2>
          <h2>Prueba3</h2>
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
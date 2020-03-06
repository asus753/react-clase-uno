import { Tarjeta, BlogPost } from './tarea/Tarea1.js';
import {MatchNombre, PasswordInput, ValidationInput} from './tarea/Tarea2.js'

//---------------------------------------------TAREA 1 -----------------------------------------------------------------
/* ReactDOM.render(
  <BlogPost
    tituloBlog="ardillas"
    parrafos={`Hoy vi una ardilla.
    La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.
    Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.`}
    autor={{
      nombre:"Mauro Perez",
      titulo:"Programador Front End",
      imagen:"https://avatars1.githubusercontent.com/u/56839325?s=400&u=d9c44cc49549346955d3e23a4c4e0154adcca839&v=4"
    }}
  />,
  document.getElementById('react-app')
) */
//-------------------------------------------------TAREA 2---------------------------------------------------------------
//ReactDOM.render(<MatchNombre nombre="Mauro Perez"/>,document.getElementById('react-app'))

//ReactDOM.render(<PasswordInput minLength="8"/>,document.getElementById('react-app'))

ReactDOM.render(<ValidationInput validation={
  (value) => value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
}/>,document.getElementById('react-app'))
//-------------------------------------------------------------------------------------------------------------------------




// import { Button } from './components/Button.js';

// ReactDOM.render(
//   <Button onClick={event => alert(event.target.value)}>Hacé click!</Button>,
//   document.getElementById('react-app')
// );

// import { Page } from './components/Page.js';

// ReactDOM.render(
//   <Page
//     titulo="Mi diario"
//     articulos={[
//       { titulo: 'Dia uno', cuerpo: 'Hoy vi una ardilla.' },
//       { titulo: 'Dia dos', cuerpo: 'Hoy vi otra ardilla, pero capaz sea la misma.' },
//     ]}
//   />,
//   document.getElementById('react-app')
// );

// import { LikeButton } from './components/LikeButton.js';

// ReactDOM.render(<LikeButton />, document.getElementById('react-app'));

// import { ToDoList } from './components/ToDoList.js';

// ReactDOM.render(<ToDoList />, document.getElementById('react-app'));
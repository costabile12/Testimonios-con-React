import { type } from '@testing-library/user-event/dist/type';
import './App.css';
import Testimonio from './componentes/Testimonio';
import testimoniosData from './data/testimonio.json';


function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que nuestros exalumnos dicen sobre freeCodeCamp:</h1>

        {testimoniosData.map((testimonio,index)=>(
          <Testimonio
          key= {testimonio.id}
          nombre= {testimonio.nombre}
          pais= {testimonio.pais}
          imagen={testimonio.imagen}
          cargo= {testimonio.cargo}
          empresa= {testimonio.empresa}
          testimonio= {testimonio.testimonio}
          />
          ))}
      
       {/* <Testimonio
        nombre= 'Shawn Wang'
        pais= 'Singapur'
        imagen= 'shawn'
        cargo= 'Ingeniero de software'
        empresa= 'Amazon'
        testimonio= 'Da miedo cambiar de carrera. Solo adquirí la confianza de poder programar gracias a las cientos de horas de lecciones gratuitas de freeCodeCamp. En un año , conseguí un trabajo de seis cifras como ingeniero de software. freeCodeCamp me cambió la vida.' />

      <Testimonio
        nombre= 'Sarah Chima'
        pais= 'Nigeria'
        imagen= 'sarah'
        cargo= 'Ingeniero de software'
        empresa= 'ChatDesk'
        testimonio= 'FreeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. Su programa bien estructurado elevó mis conocimientos de programación desde un nivel principiante absoluto a un nivel de mucha confianza. Era todo lo que necesitaba para conseguir mi primer trabajo como desarrollador en una empresa increíble.' />

      <Testimonio
        nombre= 'Emma Bostian'
        pais= 'Suecia'
        imagen= 'emma'
        cargo= 'Ingeniero de software'
        empresa='Spotify'
        testimonio='Siempre me ha costado aprender JavaScript. Tomé muchos cursos, pero el de freeCodeCamp fue el que me impactó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp, me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.' /> */}
      </div>
      
    </div>
  );
}

export default App;

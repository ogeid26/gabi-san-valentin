import { CustomAccordion } from "./elements/CustomAccordion";
import CustomCarousel from "./elements/CustomCarousel";
import { CustomTable } from "./elements/CustomTable";
import { CustomTabs } from "./elements/CustomTabs";

function App() {
  return (
    <>
      <div className="bg-pink flex flex-col p-4 space-y-5 items-center ">

        <div className="max-w-full md:max-w-4xl rounded-md p-1"> {/* Set max width to full, but limit it to max-w-4xl on medium screens and above */}
          <h1 className="text-4xl md:text-6xl font-bold font-averia text-center">Feliz San Valentín corazón! <h1>🪽❤️</h1> </h1>
        </div>
       
        <div className="max-w-full md:max-w-4xl bg-purple-white rounded-md p-4"> {/* Set max width to full, but limit it to max-w-4xl on medium screens and above */}
          <p className="text-base md:text-l text-center font-averia"> Por cuestiones de la vida no pudimos pasar este San Valentín juntos :( Si por mi fuera, estaría allá y estaríamos yendo a la playa hoy,
          a pasar el día echados viendo cómo las nubes se mueven y el sol se asienta, hasta que nos dé frío por el viento que corre y regresemos (no sin antes meterle un crunchy marino). Y vamos a hacerlo cuando regresemos!
          Estuve pensando en todos los lugares a los que hemos ido y todas las pelis que hemos visto, y encontré un par de datos sobre nosotros !! Te presento: </p>  
        </div>

        <div className="max-w-full md:max-w-4xl rounded-md p-1"> {/* Set max width to full, but limit it to max-w-4xl on medium screens and above */}
          <h1 className="text-4xl md:text-6xl font-bold font-averia text-center">Los meses de Gabi y Diego </h1>
        </div>
        <div className="max-w-full md:max-w-4xl rounded-md p-1"> {/* Set max width to full, but limit it to max-w-4xl on medium screens and above */}
          <h3 className="text-center font-averia pt-2">Pero antes un par de datitos curiosos que encontré viendo mi galería de Google Photos, el historial de lugares que arma Google Maps, y extrañando a Lami </h3>
        </div>

        <div className="justify-center p-5">
          <CustomAccordion/>
        </div> 

        <div className="max-w-full md:max-w-4xl rounded-md p-1"> {/* Set max width to full, but limit it to max-w-4xl on medium screens and above */}
          <h1 className="text-xl md:text-4xl font-bold font-averia text-center">Vimos un total de <a className="text-purple-dark font-extrabold">11</a> pelis :o </h1>
          <h3 className="text-center font-averia pt-6">Acá está la lista, que de hecho incluye tres lugares: Tigre, Buenos Aires, y Lima (no vimos nada en Huacho 😢)</h3>
        </div>
 
        <div className="justify-center">
          <CustomTable/>
        </div>

        <div className="max-w-full md:max-w-4xl rounded-md p-1"> {/* Set max width to full, but limit it to max-w-4xl on medium screens and above */}
          <h1 className="text-xl md:text-4xl font-bold font-averia text-center">Fuimos a un total de <a className="text-purple-dark font-extrabold">21</a> restaurantes !! </h1>
          <h3 className="text-center font-averia pt-6">De los cuales <a className="text-purple-dark font-extrabold">9</a> estaban en Buenos Aires, <a className="text-purple-dark font-extrabold">7</a> en Lima, y <a className="text-purple-dark font-extrabold">5</a> en Huacho</h3>
        </div>
 
        <div className="max-w-full md:max-w-4xl rounded-md  p-5">
        <CustomTabs/>
          </div>
         


        <div className="max-w-full md:max-w-4xl bg-purple-white   rounded-md p-4"> {/* Set max width to full, but limit it to max-w-4xl on medium screens and above */}
          <p className="text-base md:text-l text-center font-averia"> Finalmente, te quiero dejar esta galería de las fotos que estuvimos intercambiando de nosotros. Reuní las que más me gustaron 😊</p>
        </div>

        <div className="max-w-full md:max-w-6xl justify-center"> {/* Set max width to full, but limit it to max-w-6xl on medium screens and above */}
          <div className="max-w-full rounded-md p-2"> 
            <CustomCarousel/>
          </div>
        </div>

        <div className="max-w-full md:max-w-4xl bg-purple-white rounded-md p-4 "> {/* Set max width to full, but limit it to max-w-4xl on medium screens and above */}
          <p className="text-base md:text-l text-center font-averia"> Espero que te haya gustado esta sopresa que estuve preparando un par de días !! Te quiero mucho mi gabiota hermosa, y estoy muy agradecido por tener a una persona tan tierna, cálida, y bondadosa como tú en mi vida. Ya falta solo una semana para vernos 🫀🫵 </p>  
         
        </div>
        <p className="text-base md:text-l text-center font-averia">Siempre tuyo, Diego 🐸</p>

      </div>

    </>
  );
}

export default App;
  
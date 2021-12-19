import {Slideshow, Slide, TextoSlide} from '../../Components/Slideshow/Slideshow'
import '../../App.css';
import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/4.jpg';

function Slideshows() {
    return (
        <main>
        <Slideshow controles={false} autoplay={true} velocidad="4000" intervalo="8000">
				<Slide>
					<a>
						<img src={img1} alt=""/>
					</a>
					<TextoSlide>
						<p className="Text-Slide">Agua cristalina para los hogares.</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a>
						<img src={img2} alt=""/>
					</a>
					<TextoSlide>
						<p className="Text-Slide">Trabajando para llevarte el mejor servicio.</p>
					</TextoSlide>
				</Slide>
        		<Slide>
					<a >
						<img src={img3} alt=""/>
					</a>
					<TextoSlide>
						<p className="Text-Slide">Nuestras instalaciones en las zona rurales</p>
					</TextoSlide>
				</Slide>
       			 <Slide>
					<a>
						<img src={img4} alt=""/>
					</a>
					<TextoSlide>
						<p className="Text-Slide">Agua 100% potable, para el bienestar de tus hijos.</p>
					</TextoSlide>
				</Slide>
			</Slideshow>
            </main>
    );
}

export default Slideshows;

import './App.css';
import CarouselExample from './CarouselExample';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';


function App() {
  return (
    <div className="App">
      <h2>This is Carousel Implementation using Material UI</h2>

      <div>
        <CarouselExample/> 
      </div>

      <div>
        <h2>This is Carousel Implementation with React Icons, not MUI</h2>
          return <ImageSlider slides={SliderData} />;
      </div>

    </div>
    
  );
}

export default App;


import './App.css';
import './index.css';
import Accordian from './Accordian';
import { accordionData } from './utils/content';

function App() {
  return (
    <>
    <div className="accordion">
        {accordionData.map(({title, content}) => {
            return <Accordian title={title} content={content} />;
        })}
    </div>

    </>
  );
}

export default App;

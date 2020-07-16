import React from 'react';
import 'components/app/App.css'
import logo_shadowlands0 from "images/logo_shadowlands0.png"
import logo_shadowlands1 from "images/logo_shadowlands1.png"

function App() {

  const [rotation, setRotation] = React.useState(0)
  const [image,setImage] = React.useState(logo_shadowlands0)

  const finishRotation = () => {
    setImage(logo_shadowlands1);
    setRotation(360);
  }


  return (
    <div className="App"> 
      <header className="App-header">
        <div className="App-reveal" >
          <img className="Image-spin" src={image} data-rotation={rotation} onAnimationEnd={()=>finishRotation()} alt="logo" />
          <button 
            className="Check-button wobble" 
            onClick={() => setRotation(180)} >
            Check
          </button>
        </div>
      </header>
  </div>
  );
}

export default App;

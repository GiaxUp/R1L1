import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent.jsx";
import ImageComponent from "./components/ImageComponent.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>First day of React!</p>
        <p>Function components:</p>
        <ButtonComponent number="Bottone Uno" />
        <ButtonComponent number="Bottone Due" />
        <ButtonComponent number="Bottone Tre" />
        <br></br>
        <p>Class components:</p>
        <ImageComponent
          link="https://dogtowndogtraining.com/wp-content/uploads/2012/06/300x300-061-e1340955308953.jpg"
          nome="Cane bello"
        />
      </header>
    </div>
  );
}

export default App;

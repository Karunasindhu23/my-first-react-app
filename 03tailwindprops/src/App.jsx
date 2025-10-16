import "./App.css";
import Card from "./components/Card";


function App() {
  // const myArray = [1, 2, 3]
  
  return (
    <>
      <h1 className="bg-green-300 text-black p-4 rounded-3xl text-center mb-4">
        Karunasindhu Adak
      </h1>
      <Card userName = "Alia Bhatt" btnName="Mooooore!"/>
      <Card/>
    </>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
 // Ensure correct path

function App() {
  return (
<>
  {/* <Navbar title="TextUtils" aboutText="About TextUtils"/>
  <Navbar title="Bunny"/> */}
  <Navbar /> 
 <div className="container my-3" >
 <TextForm heading="Enter the text to analyse below"/>
 {/* <About/> */}
 </div>
</>

  );
}

export default App;

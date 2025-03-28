// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
 // Ensure correct path

function App() {
  const [mode,setMode] = useState('light'); //whether dark mode is enabled or not
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
setAlert({
  msg:message,
  type:type
})
setTimeout(()=>{
  setAlert(null)
},1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
showAlert("Dark Mode has been enabled","success");
document.title="TextUtils - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success");
document.title="TextUtils - Light Mode";
//to grab the attention for evil cause

// setInterval(()=>{
//   document.title="TextUtils is Amazing";
// },2000)
// setInterval(()=>{
//   document.title="Install TextUtils now";
// },1500)

    }
  }

  return (
<>
  {/* <Navbar title="TextUtils" aboutText="About TextUtils"/>
  <Navbar title="Bunny"/> */}
  <Navbar mode={mode} toggleMode={toggleMode}/> 
  <Alert alert={alert}/>
 <div className="container my-3" >
 <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}/>
<About/>
 </div>
</>

  );
}

export default App;

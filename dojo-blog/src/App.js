import './App.css';

//component is a function and we must always return something in that function. Written in JSX template
function App() {

  //any valid javascript can be written here

  const title = "App Component";
  
  //react automatically converts to string when used below. Numbers, strings and arrays are fine by react
  //const likes = 50; 

  //will not be converted. Objects and booleans cannot be converted by react
  //const person = {name: "Yoshi", age: 30};
  
  return (
    <div className="App">
      <div className="content">
       
      <h1>{ title } </h1>
      
      </div>
    </div>
  );
}

export default App; //always export component function so we can use it in other files. We can import it in other files by adding this

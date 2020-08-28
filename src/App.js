import React from 'react';
import './App.css';
import Login from './components/Login'
import OrderedList from './components/OrderedList';
import Resources from './components/Resources'

const petNames = ["Shelly"];
const sites = [ 
  {
  Name: "Npm package prop-types",
  UrlLink: "https://www.npmjs.com/package/prop-types"}, 
  {
  Name: "React bootstrap carousel of photos", 
  UrlLink: "https://react-bootstrap.github.io/components/carousel/"
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Enzyme for Testing React
      </header>
      <Login />
      <OrderedList options={petNames} />
      {/*show a list of links to react resources */}
      <Resources reactSites ={sites}/>
    </div>
  );
}

export default App;

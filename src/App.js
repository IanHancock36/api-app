import React from 'react';
import {BrowserRouter, Switch, Route,} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Videos from './Components/Videos'
import Merch from './Components/Merch'

import Crypto from './Crypto';
import './App.modules.css';

// import StripeStore from './StripeStore';

function App() {

	return (
		<div className="app">
			 <BrowserRouter>
      <Navbar />
     
   
      
     <Switch>
    
      
       <Route path="/about"> <About/> </Route>
       <Route path="/videos"> <Videos/> </Route>
       <Route path="/about"><About/> </Route>
       <Route path="/contact"> <Contact/> </Route>
       <Route path="/merch"> <Merch/> </Route>
       <Route path="/"> <Home/> </Route>
      
       
       </Switch>
     </BrowserRouter>
		
					
		
			{/* <StripeStore /> */}
		</div>
	);
}

export default App;

// need to add a smoother transition off the search bar it is choppy mobile when searching 
	// individual cryptos. 


// make a handleclick button for handleSort and sort in ascending and descending order.
//

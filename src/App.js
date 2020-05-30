
import React, {Component} from 'react';
import List from './components/List';
import { HashRouter} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter>      
           <div className = 'app-wrapper' >  
           <div className = 'app-wrapper-content'>            
     
           <List/>
          
           </div>
    </div>
      </HashRouter>
    );
  }
}
export default App;

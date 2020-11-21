import Home from './Components/Home'
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from  './Components/Header';
import {Route} from 'react-router-dom';
import Resume from './Components/Resume';
import Projects from './Components/Projects'
import Contacts from './Components/Contacts'
const App=()=> {
  return (
   
   <div>
    <CssBaseline /> {/*this is like box-sizing to remove margins...etc */}

   <Route exact path='/' component={Home} />
   <Route  path='/resume' component={Resume} />
   <Route  path='/Projects' component={Projects} />
   <Route  path='/contacts' component={Contacts} />
   </div>
  )
}

export default App;

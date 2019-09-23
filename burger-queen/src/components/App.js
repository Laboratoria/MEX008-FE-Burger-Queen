import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './login';//para logearse con firebase
import Layout from '../views/Layout'; // para el siseño de nuestra pagina
import Areas from '../views/Areas';
import FlowStepper from './Stepper';
import Home from '../Home';

//import Home from '../Home'; //para la pagina principal
//prueba para ver sis si funciona


function App() {
  return (
    
    <BrowserRouter>

      <Switch>
        <Route exact path="/" component={Login} />
        <Layout>
          <Route path="/Areas" component={Areas} />
          <Route path="/Home" component={Home} />
          <Route path="/Stepper" component={FlowStepper} />
        </Layout>
      </Switch>
    </BrowserRouter>
    // <div>
    //   <Button text = 'Servicio'/>
    // <Button text = 'Cocina'/>
    //</div>
  );
}
export default App;



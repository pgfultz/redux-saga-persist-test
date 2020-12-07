import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Sobre from '../pages/Sobre';

export default function Navigation(){
  return(
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/sobre" exact component={Sobre} />
    </BrowserRouter>
  );
}
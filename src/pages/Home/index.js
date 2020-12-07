import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import * as exampleActions from '../../store/modules/example/actions';

export default function Home(){
  const history = useHistory();
  const dispatch = useDispatch();

  function handleClick(e){
    e.preventDefault();

    dispatch(exampleActions.clicaBotaoRequest());
  }

  return(
    <>
    <div className="container">
      Home
      <button onClick={() => history.push('/sobre')}>Sobre</button>
      <button onClick={handleClick}>Teste Redux</button>
    </div>
    </>
  );
}
import { useSelector } from 'react-redux';

import './styles.css';

export default function Header(){
  const botaoClicado = useSelector(state => state.exampleReducer.botaoClicado);
  return(
    <div className="f-header">
      Header <br/>
      {botaoClicado ? 'Clicado' : 'Não Clicado'}
    </div>
  );
}
import { useHistory } from 'react-router-dom';

export default function Sobre(){
  const history = useHistory();

  return(
    <>
    <div className="container">
      Sobre
      <button onClick={() => history.push('/')}>Voltar para Home</button>
    </div>
    </>
  );
}
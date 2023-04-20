import FullAvaliacao from './components/main/section/avaliacao/FullAvaliacao'
import clientes from './json/avaliacoes.json'; 

function App() {

  return (
      <FullAvaliacao filename = {clientes}/>
  )
}

export default App

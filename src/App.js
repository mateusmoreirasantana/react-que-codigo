import { useState} from "react"

function App() {
  const [textoDigitado,setTextoDigitado] = useState("")
  return (
    <div className="App">
      <textarea placeholder="Digite aí" rows={15}  onChange={(e) => setTextoDigitado(e.target.value.toUpperCase())}></textarea>
      <div className="mirror">
        <h1>Código</h1>
        {textoDigitado}
      </div>
    </div >
  );
}

export default App;

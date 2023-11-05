
import './App.css'
import Counter from './Counter'
import { signal } from '@preact/signals-react';
const name=signal("")
function App() {
  const handlechange=(e)=>{
   name.value=e.target.value
  }
  return (
    <>
    <input value={name} onChange={handlechange} />
      <Counter/>
    </>
  )
}

export default App

import {useState} from "react"

// import appFirebase from '../src/credenciales'
// import {getAuth, onAuthStateChanged} from "firebase/auth"

// const auth = getAuth(appFirebase)

import appFirebase from '../src/credenciales'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import FirestoreView from "../src/components/FirestoreView";

const auth = getAuth(appFirebase)

//Import Components
 import Login from '../src/components/Login'
 import Home from '../src/components/Home'

import './App.css'

function App() {

  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged(auth, (usuarioFirebase)=>{
    if(usuarioFirebase){
      setUsuario(usuarioFirebase)
    }
    else
    {
      setUsuario(null)
    }
  })

  return (
    <div>
      {usuario ? <FirestoreView correoUsuario = {usuario.email} /> : <Login/>}
    </div>
  )
}

export default App

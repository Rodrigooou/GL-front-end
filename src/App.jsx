import './App.scss'

import Header from './components/Header/Header';
import Rodape from './components/Rodape/Rodape';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Rodape/>
    </>
  )
}

export default App

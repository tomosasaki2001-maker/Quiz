
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Quiz from './Pages/Quiz'
import ResultPage from './Pages/RESULT/ResultPage'



export default function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route  path='/quiz' element={<Quiz/>}/>
        <Route path='/result' element={<ResultPage/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}


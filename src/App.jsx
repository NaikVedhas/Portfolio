import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import NotFound from "./pages/NotFound";
import About from './pages/About'
import Projects from './pages/Projects'
import SpeakerSession from './pages/Speaker'

function App() {


  const router =  createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='projects' element={<Projects/>}/>
        <Route path='speaker' element={<SpeakerSession/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route  path='*' element={<NotFound/>}/>
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App

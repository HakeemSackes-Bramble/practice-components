import './App.css'
import MyHeader from './components/MyHeader/MyHeader.js'
export default function App() {
  return (
    <main>
      <Navbar></Navbar>
      <MyHeader></MyHeader>
    </main>
  )
}

const Navbar = () =>
{
    return <h1>This is Navbar.</h1>
}
 

import { useState } from 'react'
import './App.css'
import Content from './components/content'
import PortfolioApp from './shivam_professional_web_developer_portfolio_react_tailwind'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='app-container'>
    <PortfolioApp/>
   </div>

    </>
  )
}

export default App

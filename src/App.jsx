import React from 'react'
import MorningGreetComponent from './components/MorningGreetComponent/MorningGreetComponent'
import NoonGreetComponent from './components/NoonGreetComponent/NoonGreetComponent'
import CounterComponent from './components/CounterComponent/CounterComponent'
import CounterFunctionalComponent from './components/CounterFunctionalComponent/CounterFunctionalComponent'
import NavBarComponent from './components/NavBarComponent/NavBarComponent'

function App() {
  return (
    <React.Fragment>
      {/* <MorningGreetComponent firstname="JAI" lastname="GANESH"/>
      <NoonGreetComponent firstname="JAI" lastname="GANESH"/> */}
      {/* <CounterComponent/> */}
      {/* <CounterFunctionalComponent/> */}
      <NavBarComponent/>
    </React.Fragment>
  )
}

export default App
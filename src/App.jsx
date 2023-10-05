
import Header from './components/Header'
import Explore from './components/Explore'
import ServiceProvider from './components/ServiceProvider'
import './App.css'
import TrainBus from './components/TrainBus'
import ChooseYatri from './components/ChooseYatri'
import OneCab from './components/OneCab'
import Discover from './components/Discover'

function App() {

  return (
    < >
      <Header/>
      <div className='main'>
      <Explore/>
      </div>
      <ServiceProvider/>
      <TrainBus/>
      <ChooseYatri/>
      <OneCab/>
      <Discover/>
    </>
  )
}

export default App

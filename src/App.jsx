import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './components/Data'
import Footer from './components/Footer'

function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        item = {item}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <div className='cards--contenedor'>
        {cards}
      </div>
      <Footer />
    </div>
  )
}

export default App

import { useEffect, useState } from 'react'
import Axios from 'axios'
import { useMediaQuery } from '@mui/material'
import Listings from './components/Listings'
import FloorCharts from './components/FloorCharts'
import { FLOOR_DATA_URL, WARRIOR_DATA_URL } from './constants'

function App() {
  const [warriorsData, setWarrirosData] = useState(null)
  const [floorData, setFloorData] = useState(null)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  useEffect(() => {
    Axios.get(WARRIOR_DATA_URL)
      .then((response) => setWarrirosData(response.data))
      .catch((error) => console.error(error))

    Axios.get(FLOOR_DATA_URL)
      .then((response) => setFloorData(response.data))
      .catch((error) => console.error(error))
  }, [])

  if (isDesktop) {
    return (
      <div className='App'>
        <Listings title='Recently Listed' options={{ sold: false }} />

        {warriorsData && floorData && <FloorCharts warriorsData={warriorsData} floorData={floorData} />}

        <Listings title='Recently Sold' options={{ sold: true }} />
      </div>
    )
  }

  return (
    <div className='App'>
      <Listings title='Recently Listed' options={{ sold: false }} />
      <Listings title='Recently Sold' options={{ sold: true }} />
    </div>
  )
}

export default App

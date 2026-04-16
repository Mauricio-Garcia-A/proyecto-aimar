import { useCallback, useState } from 'react'
import Loader    from './components/Loader/Loader'

import Home from './pages/Home/Home'

function App() {
  const [loading,   setLoading]   = useState(true)

  const handleLoaderFinish = useCallback(() => {
    setLoading(false)
  }, [])
  

  return (
    <>
      {loading && <Loader onFinish={handleLoaderFinish} />}

      <div style={{ visibility: loading ? 'hidden' : 'visible' }}>
        <Home />
      </div>
    </>
  )
}

export default App

import React, { useEffect, useState } from 'react'


function App() {
 const [backendData, setBackendData] = useState({}) // Inicializa el estado con un objeto vacío

 useEffect(() => {
    fetch('/landingpage').then(
      response => response.json()
    ).then(
      data => {
      setBackendData(data)
    }
  )
}, )

  return (
    <div>
      <p>El mensaje de la ruta es: <strong>{backendData.messages}</strong></p>
      
    </div>
  )
}

export default App

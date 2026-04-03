import React from 'react'
import Card from './components/card'
const App = () => {
  return (
    <div className='parent'>
      <Card user='sanaya' age={18} img='https://media.istockphoto.com/id/899149208/photo/heart-of-love-sign.jpg?s=612x612&w=is&k=20&c=k1OMlYz6pVxY97TEepcoEWNzCfODiH0yS1TSbj1Azhc='/>
        <Card user='shambhavi'age={22} img='https://images.unsplash.com/photo-1695645233801-bc452fbebb59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8='/>
        <Card user='nishu' age={21} img='https://media.istockphoto.com/id/899935556/photo/heart-of-love-sign.jpg?s=612x612&w=0&k=20&c=4CYXUuuvG3jis-_otiWAfZd6CeTv-BDR6xoiblPC5BE='/>
    </div>
  )
}

export default App


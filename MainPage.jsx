import React ,{useState}from 'react'
import Header from './Componets/Header'
import Banner from './Componets/Banner'
import Collection from './Componets/Collection'
import Footer from './Componets/Footer'
import {Gents,Ladies} from './data'
import WomenCollection from './Componets/WomenCollection'

const MainPage = () => {
    const [gentsFashion, setGentsFashion] = useState(Gents)
    const [ladiesFashion, setLadiesFashion] = useState(Ladies)
    
    console.log(Ladies)

  return (
    <div><Header/>
    <Banner/>
    <Collection gentsFashion={gentsFashion}/>
    <WomenCollection ladiesFashion = {ladiesFashion} />
   

    <Footer/>
    </div>
  )
}

export default MainPage
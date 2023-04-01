import{ useState, useEffect } from 'react'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import Product from '../components/Product'

function Home(){
  return <>
    <div>
        <SearchBar />
        <Product />
        <Footer />
    </div>
  </>
}
export default Home
import React, { useState } from 'react'
import Pizza from './components/Pizza'
import Header from './components/Header'
import Menu from './components/Menu'
import Footer from './components/Footer'
import data from "../src/data"
const App = () => {
  const allCategories = ['all', ...new Set(data.map((item) => item.category))]
  const [filteredData, setFilteredData] = useState(data)

  const filterItems = (category) => {
    if (category === 'all') {
      setFilteredData(data)
    } else {
      const newItems = data.filter((item) => item.category === category)
      setFilteredData(newItems)
    }
  }
  return (
    <div>
      <Header />
      <Menu categories={allCategories} filterItems={filterItems} />
      <Pizza data={filteredData} />
      <Footer />
    </div>
  )
}

export default App

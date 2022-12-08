import './App.css';
import React from 'react';
import ProducList from './components/ProductList/ProductList';
import SortButton from './components/UI/SortButton/SortButton';
import { useState } from 'react';
import { selectAllProducts } from './app/slices/productsSlice';
import { useSelector } from 'react-redux';
import SearchInput from './components/UI/SearchInput/SearchInput';
import SideBar from './components/SideBar/SideBar';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProduct from './components/AddProduct/AddProduct';
import Modal from './components/UI/Modal/Modal';

function App() {

  const products = useSelector(selectAllProducts)

  const [query, setQuery] = useState("")
  const [sortType, setSortType] = useState(null)
  const [inCart, setInCart] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)

  const getSortedProducts = () => {
    if (sortType === 'asc') {
      return [...products].sort((a, b) => a.price - b.price)
    }
    else if (sortType === 'desc') {
      return [...products].sort((a, b) => b.price - a.price)
    }
    else {
      return [...products]
    }
  }

  const addToCart = (product) => {
    setInCart([...inCart, product])
  }

  const removeFromCart = (item) => {
    let flag = 0
    let newList = [...inCart].filter(i => {
      if (i === item && !flag){
        flag = 1
        return false
      }
      return true
    })
    setInCart(newList)
  }

  const mainPage = () => {
    return (
      <div className="App">
        <div className='sortPanel'>
          Filter Products
          <SearchInput placeholder={"Search..."} value={query} onChange={(e) => setQuery(e.target.value)}/>
          <div className='buttonContainer' onClick={() => setSortType("desc")}><SortButton>Most Expensive</SortButton></div>
          <div className='buttonContainer' onClick={() => setSortType("asc")}><SortButton>Least Expensive</SortButton></div>
        </div>
        <div className='productsContainer'>
          {products.length} Product(s) found
          <ProducList getSortedProducts={getSortedProducts} query={query} addToCart={addToCart}/>
        </div>
        <SideBar inCart={inCart} increment={(prod) => setInCart([...inCart, prod])} decrement={removeFromCart}/>
        <Modal visible={isModalVisible} setVisible={setIsModalVisible}>
          <AddProduct confirmation={() => setIsModalVisible(false)}/>
        </Modal>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <Header setIsModalVisible={() => setIsModalVisible(true)} isModalVisible={isModalVisible}/>
      <Routes>
        <Route path='/' element={mainPage()}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

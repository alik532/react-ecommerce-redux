import React from 'react'
import SearchInput from '../UI/SearchInput/SearchInput'
import classes from './AddProduct.module.css'
import { useState } from 'react'
import Modal from '../UI/Modal/Modal'
import { selectAllImages } from '../../app/slices/imagesSlice'
import { useSelector } from 'react-redux'
import SortButton from '../UI/SortButton/SortButton'
import { useDispatch } from 'react-redux'
import { productAdded } from '../../app/slices/productsSlice'

const AddProduct = (props) => {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [inStock, setInStock] = useState("")
    const [selectedImage, setSelectedImage] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const images = useSelector(selectAllImages)

    const dispatch = useDispatch()

    const handleImageSelect = (item) => {
        setSelectedImage(item.link)
        setIsModalOpen(false)
    }

    const confirmation = () => {
        console.log("added")
        dispatch(productAdded(title, selectedImage, price, inStock))
        setInStock("")
        setPrice("")
        setTitle("")
        setSelectedImage(null)
        props.confirmation()
        console.log("added2")
    }

    return (
        <div className={classes.addProduct}>
            <div className={classes.preview}>
                <h1>Preview</h1>
                <div className={classes.productCard}>
                    {selectedImage === null
                    ? <div className={classes.unselectedImg} onClick={() => setIsModalOpen(true)}>Select an Image</div>
                    : <img alt="1" className={classes.selectedImg} src={selectedImage} onClick={() => setIsModalOpen(true)}/>
                    }
                    <div className={classes.content}>
                        <div className={classes.title}>{title}</div><div className={classes.decor}></div>
                        <div className={classes.price}>$ {price}</div>
                        <div className={classes.quantity}>In stock: {inStock}</div>
                    </div>
                </div>
            </div>
            <div className={classes.configure}>
                <div>
                <h1 className={classes.edit}>Edit your product</h1>
                    <SearchInput placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title}/>
                    <SearchInput placeholder="Price" onChange={(e) => setPrice(e.target.value)} value={price}/>
                    <SearchInput placeholder="In Stock" onChange={(e) => setInStock(e.target.value)} value={inStock}/>
                </div>
                <div className={classes.confirm} onClick={confirmation}>
                    <SortButton>Confirm</SortButton>
                </div>
            </div>
            <Modal visible={isModalOpen} setVisible={setIsModalOpen}>
                {images.map(item => 
                    <img alt='1' src={item.link} key={item.id} onClick={() => handleImageSelect(item)}/>    
                )}
            </Modal>
        </div>
    )
}

export default AddProduct
import styles from './index.module.css'
import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import About from '../pages/about'
import Contact from '../pages/contact'
import FAQ from '../pages/FAQ'
import Home from '../pages/home'
import Portrait from '../pages/portraits'
import Wedding from '../pages/wedding'
import Birthday from '../pages/birthday'
import Product from '../pages/product'
import Family from '../pages/family'
import NotFound from '../pages/notfound'

const Main = ({setColor,
                          color,btColor,wtColor,
                          setBgColor,
                          bgColor}) => {
  const location = useLocation();
  return (
    <main
     className={styles.container}>
      <AnimatePresence initial={false} mode='wait'>
      <Routes location={location} key={location.key}>     
              <Route exact path='/' element={<Home
               setColor={setColor}
               color={color}
               wtColor={wtColor}
               btColor={btColor}
               setBgColor={setBgColor}
               bgColor={bgColor}/>}/>

              <Route exact path='/about' element={<About/>}/>
               <Route exact path='/frequently-asked-questions' element={<FAQ
               setColor={setColor}
               color={color}
               wtColor={wtColor}
              btColor={btColor}
               setBgColor={setBgColor}
               bgColor={bgColor}/>}/>

              <Route exact path='/contact' 
              element={<Contact
              setColor={setColor}
              color={color}
              btColor={btColor}
              wtColor={wtColor}
              setBgColor={setBgColor}
              bgColor={bgColor}/>}/>

              <Route exact path='/gallery-portraits' element={<Portrait/>}/>
              <Route exact path='/gallery-weddings' element={<Wedding/>}/>
              <Route exact path='/gallery-birthdays' element={<Birthday/>}/>
              <Route exact path='/gallery-products' element={<Product/>}/>
              <Route exact path='/gallery-family' element={<Family/>}/>
              <Route path='*' element={<NotFound/>}/>
      </Routes>
      </AnimatePresence>
        </main>
  )
}

export default Main
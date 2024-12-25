import MyComponent from './About'
import './App.css'
import Service from './components/Service'
import Product from './components/Product'


function App() {
  return (
    <>
    <Service name="Azim" age="16" image="https://th.bing.com/th/id/R.0cc1d9c578cd1ad75c94891e95464094?rik=AkTukpJFza296g&pid=ImgRaw&r=0"></Service>
    <Service name="Saltanat" age="15" image="https://apostrophe.ua/uploads/image/beb27cc14821dfc34a20aa167491ffcb.jpg"></Service>

    <Product title="Iphone" discount={true} price={1600}  present={12} image="https://apple-premium.ru/image/cache/catalog/apple-iphone-14-pro-max/iphone-14-pro-max-1-Tb-gold-360x420.jpg"/>  
    <Product title="ЗАРЯДНИК" discount={false} price={100}  present={5} image="https://content1.rozetka.com.ua/goods/images/big/325051767.jpg" />
    <Product title="НАУШНИКИ" discount={true} price={300} present={30} image="https://afm.kg/d/p9_plus.jpg"
    />
    <Product title="НОУТ" discount={false} price={800} present={35} image="https://www.ixbt.com/img/r30/00/02/13/87/lenovov13015.jpg" />
    <Product title="Ipad" discount={true} price={1000} present={10} image="https://istore.kg/media/products/iPad-Pro-11-WiFi-Space-Gray.webp" />
    <Product title="MacBook" discount={false} price={2000} present={8} image="https://macsave.ru/assets/images/%D0%A0%D0%B5%D0%BC%D0%BE%D0%BD%D1%82%20%D0%BD%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA%D0%BE%D0%B2%20Apple%20MacBook.jpg" />
    </>
    
  )
}

export default App

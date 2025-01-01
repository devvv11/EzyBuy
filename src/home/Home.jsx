import './home.css'
import img from './default1.png' ;
import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.jpg'
import img4 from './4.jpg'

function Home(){
 return(
   <>
        <header className="Header">
        <img  className="profileimage" src={img} height={200}></img>
            <input type="search" placeholder='🔍 Search...' />        
                <nav>
                        <ul>
                            <li>Home</li>
                            <li>Products</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                </nav>
        </header><br />
        <div className='container'>
            <div className='wrapper'>
                <img src={img1} alt="cant" />
                <img src={img2} alt="cant" />
                <img src={img3} alt="cant" />
                <img src={img4} alt="cant" />
            </div>
        </div>
   </>
 )   
}

export default Home
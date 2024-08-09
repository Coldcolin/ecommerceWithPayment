import "./css/Home.css";
import HomeCard from "../components/HomeCard";
import products from "../dB/products.js"
const Home=()=>{
    console.log(products)
    return(
        <div className="Home">
            {
                products.map((e)=>(
                    <HomeCard key={e.id} info={e}/>
                ))
            }
        </div>
    )
}

export default Home;
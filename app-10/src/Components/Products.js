import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

class Products extends React.Component{
    constructor(props){
        super(props)
        this.state={
            products:[]
        }
    }
    componentDidMount(){
        axios.get("https://practiceapi.devmountain.com/products").then(res=>{
            console.log(res.data)
            this.setState({products:res.data});
        })
    }
    render(){
        let listProducts = this.state.products.map(item=>(
            <div key={item.id}>
                <Link to={"/details/"+item.id}>
                    <img src={item.image} height="150px" alt={item.title}/>
                </Link>
            </div>
        ))
        return(
            <div>
                <h1>Products</h1>
                <div className="item_container">
                    {listProducts}
                </div>
            </div>
        )
    }
}

export default Products;
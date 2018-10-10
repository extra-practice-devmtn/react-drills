import React from "react";
import axios from "axios";

class Details extends React.Component{
    constructor(props){
        super(props)
        this.state={
            item:{}
        }
    }

    componentDidMount(){
        axios.get("https://practiceapi.devmountain.com/products/"+this.props.match.params.id).then(res=>{
            this.setState({item:res.data});
        })
    }

    render(){
        return(
            <div>
                {(this.state.item.price)?
                <div>
                    <h1>{this.state.item.title}</h1>
                    <img src={this.state.item.image} height="300px" alt={this.state.item.title}/>
                    <h3>Price: ${parseInt(this.state.item.price).toFixed(2)}</h3>
                </div>
                :<h1>Loading...</h1>
                }
            </div>
        )
    }
}

export default Details;
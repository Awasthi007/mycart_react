import React from 'react';

class CartItem extends React.Component {
    constructor(){
        super();
        this.state = {
            price: 999099,
            title: 'Mobile Phone',
            qty: 1,
            img:''
        }
        // this.increaseQty = this.increaseQty.bind(this)
    }
    // arrow function binds the object with the function
    increaseQty = () => {
        //this.state.qty += 1;
        console.log(this.state);
        // set state form 1
        // this.setState({
        //     qty: this.state.qty + 1
        // })
        // set State form 2
        this.setState((prevState) => {
            return{
                qty: prevState.qty + 1
            }
        });
        // if previous state is requried then use the second form else use the first form
        
    }
    render(){
        const {price, title, qty} = this.state;
        return (
            <div className="cart-item">
                <div className='left-block'>
                    <img alt="" style={styles.image}/>
                </div>
                <div className='right-block'>

                    <div style={{fontSize:25}}>
                        {title}
                    </div>

                    <div style={{color: "#777"}}>
                       Rs {price}
                    </div>

                    <div style={{color: "#777"}} >
                        Qty: {qty}
                    </div>

                    <div className='cart-item-actions'>
                        {/* Buttons */}
                        <img 
                            alt="increase" 
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png"
                            onClick= {this.increaseQty}
                        />
                        <img
                            alt="decrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                        />
                        <img 
                            alt="deleteflat" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/1214/1214594.png"
                        />
                    </div>
                </div>

            </div>
            
        )
    }
}


const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: "#ccc"
    }
}




export default CartItem;
import React, { Component } from 'react'

//controlled class
//does not have it's local state
//it's all controlled by it's parent class 
//this class will only raise an event and recived data from it's parent class
export class Counter extends Component {
   


handleDeOrIn(counterid,sign)
{   //this will not working react is not aware of changing!!
    // this.state.count++; 
    //this is how to change the state
    //setState will tell react state will change
    this.props.onDeorIn(counterid,sign)
       
       console.log(counterid,sign);
}
styles={
    fontSize:20,
};

    getclassBadge()
    {
        let classbadge='badge m-3 badge-';
        if(this.props.counter_items.val===0)
            classbadge+='warning'
        else
            classbadge+='primary';
        return classbadge;
    }

    
    onDelete(counterId)
    {
        this.props.onDelete(counterId);
    }
    render() {
      
        return (
            <div>
                <span style = {this.styles} className={this.getclassBadge()}>
                    {this.formatCount()}</span>

                <button className='btn btn-primary btn-sm bg-primary m-3'
                 onClick={this.handleDeOrIn.bind(this,this.props.counter_items.id,'+')}>
                      Increment
                 </button>   

                 <button className='btn btn-secondary btn-sm m-2'
                 onClick={this.handleDeOrIn.bind(this,this.props.counter_items.id,'-')}>
                      Decrement
                 </button>    
                    
                 <button className='btn btn-secondary btn-sm bg-danger m-2'
                onClick={this.onDelete.bind(this,this.props.counter_items.id)}>
                      Delete
                 </button>     
            </div>
        )
    }
    formatCount()
    {
        if(this.props.counter_items.val===0)
            return 'ZERO';
        else
            return (this.props.counter_items.val.toString());
    }
}

export default Counter

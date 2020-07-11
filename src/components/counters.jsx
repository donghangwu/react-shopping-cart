import React, { Component } from 'react'
import Counter from'./counter'
export class Counters extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            counters:[
                {
                    id:0,
                    val:0,
                },
                {
                    id:1,
                    val:0,
                },
                {
                    id:2,
                    val:0,
                },
                {
                    id:3,
                    val:0,
                }
            ]
        }
        //cannot read this.state from function
        this.handleDelete=this.handleDelete.bind(this);
        this.Counters_handleInDe=this.Counters_handleInDe.bind(this);
    }
       //reset handler
       resetButton()
       {
       let newcounters=[
            {
                id:0,
                val:0,
            },
            {
                id:1,
                val:0,
            },
            {
                id:2,
                val:0,
            },
            {
                id:3,
                val:0,
            }
        ]
        this.setState({counters:newcounters});
       }
   //event handler 
       handleDelete(counterId)
       {
        const newCounters = this.state.counters.filter(c=>c.id!=counterId)
        //reset the id from 0  otherwise the id will be like 0,2,3
        let a=0;
        newCounters.forEach(element => {
            element.id=a++;           
        });
        this.setState({counters:newCounters})
        console.log(this.state.counters,'connected to handle Delete',counterId);
       };

       Counters_handleInDe(counterid,sign)
       {
           if(sign==='+')
            {
                const newcounters = this.state.counters;
                newcounters[counterid].val++;
                this.setState({counters: newcounters });
            }
            else if(sign==='-')
            {
                const newcounters = this.state.counters;
                newcounters[counterid].val--;
                this.setState({counters: newcounters });
            }
       }
    
    render() {

        return (
            <div>

                <button  className='btn btn-primary btn-sm bg-danger m-3'
                onClick={this.resetButton.bind(this)}>
                    Reset Button
                </button>
            
        {/* create an array of Counter,with pass parameter val, selected */}
                {this.state.counters.map(this.passToCounter.bind(this))}

          </div>
        )
    }

    passToCounter(counter)
    {
      return(
        <Counter  key={counter.id }  onDelete={this.handleDelete} 
        counter_items={counter}  onDeorIn = {this.Counters_handleInDe}>

            <h3>counter#: {counter.id}</h3>

        </Counter>
      )  
    }
     
}

export default Counters

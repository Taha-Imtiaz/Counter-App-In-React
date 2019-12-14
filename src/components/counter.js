import React, { Component } from 'react';
class Counter extends Component {
   componentDidUpdate(prevProps,prevState)
   {
    //compare old state with new state
    //compare old props with new props
    console.log('prev Props',prevProps)
    console.log('prev State',prevState)
if(prevProps.counter.value!==this.props.counter.value)   
{
    //Ajax call and get new data from the server
}

}
componentWillUnmount()
{
    console.log('Counter- Unmount')
}
   
   
   
    // state = { 
    //     count:this.props.counter.value,
    //     // tags:['tag1','tag2','tag3']
        
    //  };

    //  constructor()
    //  {
    //      super()
    //      this.getIncrement=this.getIncrement.bind(this)
    //  }

    //  styles={
    //      fontSize:'60px',
    //      fontWeight:'bold'
    //  }

// getIncrement=product=>
// {
//     // console.log(product)
//     // console.log('Increment Clicked',this)
//     // obj.method()->object
//     // function()   // return undefined in strict mode
// this.setState({
// count:this.state.count + 1
// })
// }

// renderTags()
// {
//     if(this.state.tags.length===0)return <p>There are no Tags!</p>
//    return( <ul>
//     {this.state.tags.map(tag =><li key={tag}>{tag}</li>)}
//     </ul>)
// }


    render() { 
        // React.createElement('div')

    //  console.log('props',this.props)
        
    console.log('Counter Rendered')

        return ( <div className='row'>
           <div className='col-1'>
            <span  className={this.getBadgeClasses()}>
            {this.formatCount()}</span></div>
           <div className='col'>
           <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">+</button>
        <button onClick={()=>this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm m-2"disabled={this.props.counter.value===0?'disabled':""}>-</button>
      <button onClick={()=>this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm '>Delete</button>
         
           </div>
          {/* <h4>Counter # {this.props.id} </h4> */}
       
        
      
      {/* { this.renderTags()} */}
      
        </div>
         );
    }
    getBadgeClasses()
    {
        let classes='badge m-2 badge-';
        classes+=(this.props.counter.value===0)?'warning':'primary'
        return classes
    }


    
     formatCount() {
         const {value}=this.props.counter;
        return value===0?'Zero':value
    }
}
 
export default Counter;
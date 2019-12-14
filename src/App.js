import React,{Component} from 'react';
// import logo from './logo.svg';
import Navbar from './components/Navbar'
import './App.css';
import Counters from './components/Counters';
class App extends Component {
  state = { 
    counters: [
        {id:1,value:4},
     {id:2,value:0},
     {id:3,value:0},
    {id:4,value:0},
    {id:5,value:0}

    ]
   }

   constructor(props)
   {
     super(props)
     console.log('App- Constructor')
    //  this.state=this.props.something
   }

   componentDidMount()
   {
    //  //Ajax call
    //  this.setState({movies})
    console.log('App - Mounted')
   }

   handleIncrement=counter=>{
      // console.log(counter)
      const counters=[...this.state.counters]
      // console.log(counters)
      const index=counters.indexOf(counter)
      // console.log(index)
      counters[index]={...counter}
      // console.log(counters)
      counters[index].value++
      // console.log(counters)
      // console.log(this.state.counters[0])
   this.setState({counters})
  }
  handleDecrement=counter=>{
    // console.log(counter)
    const counters=[...this.state.counters]
    // console.log(counters)
    const index=counters.indexOf(counter)
    // console.log(index)
    counters[index]={...counter}
    // console.log(counters)
    counters[index].value--
    // console.log(counters)
    // console.log(this.state.counters[0])
 this.setState({counters})
}

   handleReset=()=>{
 const counters= this.state.counters.map(c=>{
c.value=0
    return c
  })
  this.setState({counters})
   }


   handleDelete=(counterId)=>{
      // console.log('Event handler called',counterId)
      const counters=this.state.counters.filter(c=>c.id !== counterId)
  this.setState({counters})
  }
  
  render(){
console.log('App-Rendered')
    

  return (
  <React.Fragment>
    <Navbar totalCounters={this.state.counters.filter(c=>c.value > 0).length}/>
    <main className='container'>
    <Counters
    counters={this.state.counters}
     onReset={this.handleReset} 
     onIncrement={this.handleIncrement} 
     onDecrement={this.handleDecrement}
     onDelete={this.handleDelete}/>
    </main>
    </React.Fragment>
  );
}
}
export default App;

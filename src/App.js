import React from "react";
class Challange extends React.Component {
  constructor (){
    super();
    this.state={todos:
      [{id:0,task:'eat',done :false },{id:1,task:'sleep',done :true },{id:2,task:'play',done :true }]
    , handle :'' }
  }
 handleadd=()=>{ this.setState({ todos:  [...this.state.todos, {id:Math.random(),task:this.state.handle, done:false}] })}
 deletel=(id)=>{ this.setState( {todos:   this.state.todos.filter(el=>el.id!= id) })}
 
  render() {

    return (
      <div>
      <div>
        {this.state.todos.map(el=> <div>
          <h1> {el.task}</h1>
          <button  onClick ={()=>this.deletel(el.id)}>Remove </button >
          <button>Done </button > 
          </div>)}
          </div>
          
          <div>
          <input type="text" 
            value={this.state.handle} 
             onChange={(event)=> this.setState({handle: event.target.value})}/>
          <button onClick={this.handleadd} > add </button>
      </div>
      </div>
    )
  
  }
}
export default Challange
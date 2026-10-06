function Comp1(){
  return(
    <div>
      <h1>Component 1</h1>
    </div>
  )
}
function Comp2(){
  return(
    <div>
      <h1>Component 2</h1>
    </div>
  )
}
function Comp3(){
  return(
    <div>
      <h1>Component 3</h1>
    </div>
  )
}

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}


export default Comp1;
export {Comp2, Comp3, Greeting};
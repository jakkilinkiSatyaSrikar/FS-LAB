function Parent(){
  const name = "KING";
  const age = 20;
  return(
    <div>
      <h1>Parent Component</h1>
      <p>Calling Child Component Now and passing props</p>
      <Child name={name} age={age}/>
    </div>
  )
}

function Child(props){
  return(
    <div>
      <h1>Child Component</h1>
      <h2>Name: {props.name}</h2>
      <h2>Age: {props.age}</h2>
    </div>
  )
}

function Student({name, age}){
  return(
    <div>
      <h1>Student Component</h1>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
    </div>
  )
}

export  {Parent, Child, Student};
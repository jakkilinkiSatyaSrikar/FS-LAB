//Demo function
/*function App() {
    return (
        <h1>Hello, React!</h1>
    );
}*/
//fragments
/*function App() {
    return (
        <>
            <h1>Student Information</h1>
            <p>Name: Ravi</p>
            <p>Department: CSE</p>
        </>
    );
  }
*/
//self closing tags
/*function App() {
    return (
        <img
            src="student.jpg"
            alt="Student"
        />
    );
}
*/
//className in JSX : 
// function App() {
//     return (
//         <div>
//             <h1 className="heading">
//                 Welcome to React
//             </h1>
//         </div>
//     );
// }
//JSX Attributes with JavaScript Values
// function App() {


//     const imageUrl = "https://example.com/student.jpg";


//     return (
//         <img src={imageUrl} alt="Student" />
//     );
// }
//JSX Events
// function App() {


//     function showMessage() {
//         alert("Button clicked!");
//     }


//     return (
//         <button onClick={showMessage}>
//             Click Me
//         </button>
//     );
// }
//Styling in JSX
// function App() {
//     const headingStyle = {
//         color: "Red",
//         fontSize: "32px",
//         textAlign: "center",
//         fontWeight: "bold"
//     };

//     return (
//         <h1 style={headingStyle}>
//             Welcome to React
//         </h1>
//     );
// }
//Student Information
function App() {


    const name = "Ravi";
    const age = 20;
    const department = "CSE";


    return (
        <div>
            <h1>Student Information</h1>


            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Department: {department}</p>


            <button onClick={() => alert("Welcome " + name)}>
                Welcome
            </button>
        </div>
    );
}

export default App

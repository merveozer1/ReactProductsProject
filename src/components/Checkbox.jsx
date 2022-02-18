// import React, { useContext } from 'react'
import { CheckboxContext } from '../context/CheckboxContext'

// function Checkbox(props) {

//     const { isProductChecked, setProductChecked} = useContext(CheckboxContext)
//     // const setIsChecked = props.name === "SRM" ? setIsSrmChecked : setIsPhChecked
//     // const isChecked = props.name === "SRM" ? isSrmChecked : isPhChecked

//     return (
//         <>
//             <input className={`form-check-input border-3 border-warning fs-3 ${!isProductChecked ? "bg-warning": "bg-dark"}`} checked={!isProductChecked} type="checkbox" id="flexCheckDefault"
//                 onClick={() => {
//                     setProductChecked(!isProductChecked)
//                 }} ></input>
//             <label className='ms-3 text-light fs-3' htmlFor="">{props.name}</label>
//         </>
//     )
// }

// export default Checkbox

// import React, { Component } from 'react'
// import { Button } from 'react-bootstrap';

// class Checkbox extends Component {

//   static defaultProps = {
//     testTopics: [
//       'React JS', 'Node JS', 'Compound components',
//       'Lifecycle Methods', 'Event Handlers',
//       'Router', 'React Hooks', 'Redux',
//       'Context'
//     ]
//   }

//   constructor(props) {
//     super(props)

//     // Set initial state 
//     this.state = {
//       testName: "React js Test",
//       topics: ''
//     }

//     // Binding this keyword 
//     this.updateState = this.updateState.bind(this)
//   }

//   listOfTopics() {
//     return (
//       <ul>
//         {this.props.testTopics.map(topic => (
//           <li>{topic}</li>
//         )).push("")}
//       </ul>
//     )
//   }

//   updateState() {

//     // Changing state 
//     this.setState({
//       testName: 'Test topics are:',
//       topics: this.listOfTopics()
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h2>Test Information</h2>
//         <p>{this.state.testName}</p>
//         <p>{this.state.topics}</p>
//         {/* Set click handler */}
//         <button onClick={this.updateState}>
//           Click me!
//         </button>
//         <div className="col-sm-6 ">
//           <div className="card border-3">
//             <div className="card-body">
//               <h5 className="card-title">
//                 Category
//               </h5>
//               <div className='my-5'>

//                 <div className="card-text text-muted">Select products to add here.
//                 </div>
//               </div>
//               <div className="container">
//                 <div className='row'>
//                   <div className='col'>

//                     <Button id="addProd" variant="secondary" style={{ margin: "5px" }}
//                     >
//                       Add  Products
//                     </Button>
//                     <Button id="removeProd" variant="secondary" >
//                       Remove Products
//                     </Button>
//                   </div>
//                   <div className='col-sm-4'>
//                     <Button id="removeCat" variant="secondary" style={{ margin: "5px" }}>
//                       Remove Category
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <Button id="BtnAdd" onClick={this.updateState} variant="primary" size="lg" style={{ width: "670px", marginTop: "10px" }}>
//             Add Category
//           </Button>
//         </div>
//       </div>
//     )
//   }
// }


// export default Checkbox;


// App.tsx for ProductList
// -----------------------

// import { useEffect, useState } from "react";
// import ProductList from "./Backend/components/ProductList";

// // useEffect()
// function App() {
//   const [category, setCategory] = useState("");

//   // Default Behavior : excecute after every render
//   // useEffect(() => {});

//   return (
//     <div>
//       <select
//         className="form-select"
//         onChange={(event) => {
//           setCategory(event.target.value);
//           console.log(event.target.value);
//         }}
//       >
//         <option value=""></option>
//         <option value="Clothing">Clothing</option>
//         <option value="HouseHold">HouseHold</option>
//       </select>
//       <ProductList category={category} />
//     </div>
//   );
// }

// export default App;

// 'App.tsx' cannot be compiled under '--isolatedModules' because it is considered a global script file.
//  Add an import, export, or an empty 'export {}' statement to make it a module.
export {};

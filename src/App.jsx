import "./App.css";

//Exampe=1 const App = () => {
//   return (
//     <div className="container">
//       <h1>Hello World</h1>
//     </div>
//   );
// };
const App = () => {
  const addRed = true;
  return (
    <div className="container">
      <h1
        style={{
          color: addRed ? "red" : "yellow",
        }}
      > Hello World</h1>
    </div>
  );
};
export default App;

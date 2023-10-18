import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/home/itemListContainer/ItemListContainer";
//import CounterContainer from "./components/common/counter/CounterContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer />
      {/* <CounterContainer stock={5} />

      <CounterContainer stock={9} />

      <CounterContainer stock={2} /> */}
    </>
  );
}
export default App;

import Navbar from "./components/layout/navbar/Navbar";
import FetchingData from "./components/pages/fetchingData/FetchingData";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
//import CounterContainer from "./components/common/counter/CounterContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer />
      {/* <CounterContainer stock={5} />

      <CounterContainer stock={9} />

      <CounterContainer stock={2} /> */}
      <FetchingData />
      <ItemDetailContainer />
    </>
  );
}
export default App;

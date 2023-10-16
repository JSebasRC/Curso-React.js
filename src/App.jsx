import Navbar from "./components/layout/navbar/Navbar";
import FoodListContainer from "./components/pages/home/foodListContainer/foodListContainer";
import CounterContainer from "./components/common/counter/CounterContainer";

function App() {
  return (
    <>
      <Navbar />
      <FoodListContainer />
      <CounterContainer stock={5} />

      <CounterContainer stock={9} />

      <CounterContainer stock={2} />
    </>
  );
}
export default App;

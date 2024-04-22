import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Stats from "./components/Stats";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counters/counterSlice";

/*  normal initial state declaration
// const initialCounters = [
//   {
//     id: 1,
//     value: 0,
//   },
//   {
//     id: 2,
//     value: 0,
//   },
// ];
*/

function App() {
  /*  normal system state declaration
  // const [counters, setCounters] = useState(initialCounters);
  */
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();
  const handleIncrement = (counterId) => {
    /*  normal system increment

    // const updatedCounter = counters.map((counter) => {
    //   if (counter.id === counterId) {
    //     return {
    //       ...counter,
    //       value: counter.value + 1,
    //     };
    //   }
    //   return counter;
    // });
    // setCounters(updatedCounter);
    */
    dispatch(increment(counterId));
  };
  const handleDecrement = (counterId) => {
    /*  normal system decrement
    // const updatedCounter = counters.map((counter) => {
    //   if (counter.id === counterId) {
    //     return {
    //       ...counter,
    //       value: counter.value - 1,
    //     };
    //   }
    //   return counter;
    // });
    // setCounters(updatedCounter);
    */
    dispatch(decrement(counterId));
  };

  const totalCount = counters.reduce((sum, current) => sum + current.value, 0);
  return (
    <>
      <div className="w-screen h-screen p-10 bg-gray-100 text-state-700">
        <h1 className="max-w-md mx-auto text-center text-2xl font-bold">Simple Counter Application</h1>
        <div className="max-w-md mx-auto mt-10 space-y-5">
          {counters.map((counter) => (
            <Counter
              key={counter.id}
              count={counter.value}
              onIncrement={() => handleIncrement(counter.id)}
              onDecrement={() => handleDecrement(counter.id)}
            />
          ))}
          <Stats totalCount={totalCount} />
        </div>
      </div>
    </>
  );
}

export default App;

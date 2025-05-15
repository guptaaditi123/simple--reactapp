import { useState } from "react"


function App() {

  return (
    
      <div>
        <h1>
        Counter App
      </h1>
        <Counter></Counter>
       </div>
       
  )
}
function Counter()
{
  const[count,setcount] = useState(0);
  function increaseCount()
  {
    setcount(count+1)
  }
  function decreaseCount()
  {
    setcount(count-1)
  }
  function resetCount()
  {
    setcount(0)
  }
  return(
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Increase Count</button>
      <button onClick={decreaseCount}>Decrease Count</button>
      <button onClick={resetCount}>Reset Count</button>
    </div>
  )
}

export default App

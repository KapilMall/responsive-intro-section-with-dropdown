import Navbar from './Component/Navbar';
import Main from './Component/Main';
// import { useEffect, useState } from 'react';

function App() {
  // const [navopen, setNavOpen] = useState("");
  // const getOpenState = (openState) => {
  //   setNavOpen(openState);
  // }

  return (
    <>
     {/* openState={getOpenState} */}
      <Navbar></Navbar> 
      <Main></Main>
      {/* navopen={navopen} */}
    </>

  );
}

export default App;

import { useState } from 'react';
// import Button from "./components/Button";
import Alert from "./components/Alert";


const App = () => {
  const [isOpenAlert, setOpenAlert] = useState(false);

  const handleOpen = () => setOpenAlert(true);

  const handleClose = () => setOpenAlert(false);

  return (
     <>
       <button onClick={handleOpen}>Open alert</button>

       {isOpenAlert && <Alert color="primary" onClose={handleClose}>Some text</Alert>}
       {isOpenAlert && <Alert color="error" onClose={handleClose}>Some text</Alert>}
       {isOpenAlert && <Alert color="warning" onClose={handleClose}>Some text</Alert>}

     </>
  )
};


// function App() {

 
//   return (
//     <div >

// <Button color="primary" size = "normal">Primary button</Button><br/>
// <Button color="primary" size="large">Primary large button</Button><br/>
// <Button color="secondary">Secondary button</Button><br/>
// <Button color="primary" disabled>Disabled button</Button><br/>

//     </div>
//   );
// }

export default App;

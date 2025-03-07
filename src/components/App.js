// create your App component here
import React, { useState, useEffect }from "react";


  function App() {
    const [dogImage, setDogImage]  = useState(null);

    useEffect(() => {
      fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDogImage(data.message);
      });
    }, []);

    if (!dogImage) return <h2>Loading....</h2>

    return <img src={dogImage}  alt="A Random Dog"/>
  }

  export default App;
import { useState } from "react";
const Home = () => {
  //let name = "manoj";
  const [name, setName] = useState("mario");

  const handleClick = () => {
    setName("jo");
    //console.log(name);
  };

  return (
    <div className="home">
      <h1>This is the home Content</h1>
      <h3>{name}</h3>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Home;

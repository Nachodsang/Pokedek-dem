import { Button, Image } from "antd";
import pokemonLogoSrc from "./assets/images/pokedex.png";
import "antd/dist/reset.css";

function App() {
  return (
    <div>
      <div>React App</div>
      <Image width={200} src={pokemonLogoSrc} />

      <Button type="primary">Click</Button>
    </div>
  );
}

export default App;

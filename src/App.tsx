import * as Colyseus from "colyseus.js";
import BasicRoom from "./layouts/BasicRoom";

// const client = new Colyseus.Client("ws://192.168.1.252:2567");

var host = window.location.host.replace(/:.*/, "");

var client = new Colyseus.Client(`ws://${host}:2567`);

function App() {
  return (
    <div>
      <BasicRoom client={client} />
    </div>
  );
}

export default App;

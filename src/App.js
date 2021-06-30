import { Button } from "@material-ui/core";
import { Save } from "@material-ui/icons";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          endIcon={<Save />}
          onClick={() => alert("hello")}
          size="large"
          href="#"
          style={{
            fontFamily: "Roboto",
            fontSize: 50,
            backgroundColor: "#019cde",
          }}
          variant="contained"
          color="primary"
        >
          Hello World
        </Button>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;

import { Button, ButtonGroup } from "@material-ui/core";
import { Delete, Save } from "@material-ui/icons";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonGroup
          style={{
            fontFamily: "Roboto",
            fontSize: 15,
            backgroundColor: "#019cde",
          }}
          variant="contained"
        >
          <Button endIcon={<Save />} onClick={() => alert("hello")} href="#">
            Save
          </Button>
          <Button endIcon={<Delete />} onClick={() => alert("bye")} href="#">
            Discard
          </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;

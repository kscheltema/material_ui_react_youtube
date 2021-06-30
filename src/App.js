import { Button, ButtonGroup } from "@material-ui/core";
import { Delete, Save } from "@material-ui/icons";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonGroup>
          <Button
            endIcon={<Save />}
            onClick={() => alert("hello")}
            size="large"
            href="#"
            style={{
              fontFamily: "Roboto",
              fontSize: 15,
              backgroundColor: "#019cde",
            }}
            variant="contained"
            color="primary"
          >
            Save
          </Button>
          <Button
            endIcon={<Delete />}
            onClick={() => alert("hello")}
            size="large"
            href="#"
            style={{
              fontFamily: "Roboto",
              fontSize: 15,
              backgroundColor: "#019cde",
            }}
            variant="contained"
            color="primary"
          >
            Discard
          </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;

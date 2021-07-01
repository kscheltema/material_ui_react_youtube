import { useState } from "react";
import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Delete, Save } from "@material-ui/icons";
import logo from "./logo.svg";
import "./App.css";

const useStyles = makeStyles({
  root: {
    borderRadius: 10,
    color: "#fff",
    backgroundColor: "#019cde",
    padding: "0 30px",
  },
});

function ButtonStyle() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Style</Button>;
}

function CheckboxExample() {
  const [checked, setChecked] = useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          onChange={(event) => setChecked(event.target.checked)}
          icon={<Delete />}
          checkedIcon={<Save />}
          checked={checked}
        />
      }
      label="Testing Checkbox"
    />
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonStyle />
        <TextField
          variant="outlined"
          style={{ backgroundColor: "#019cde" }}
          type="email"
          placeholder="test@test.com"
        />
        <CheckboxExample />
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

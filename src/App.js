import { useState } from "react";
import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@material-ui/core";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { Delete, Save } from "@material-ui/icons";
import { blue, green } from "@material-ui/core/colors";
import "fontsource-roboto";
import logo from "./logo.svg";
import "./App.css";

const useStyles = makeStyles({
  root: {
    borderRadius: 9,
    color: "#fff",
    background: "linear-gradient(45deg, #c7c7c7, #019cde)",
    padding: "0.5rem 1rem",
    marginBottom: "1rem",
  },
});

const theme = createMuiTheme({
  typography: {
    h2: {
      fontsize: 28,
    },
  },
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: green[500],
    },
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
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Typography variant="h2">Welcome to MUI</Typography>
          <Typography variant="subtitle1">
            for more examples see the materialUI docs
          </Typography>
          <ButtonStyle />
          <TextField
            variant="outlined"
            style={{ backgroundColor: "#019cde" }}
            type="email"
            color="primary"
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
            <Button
              color="primary"
              endIcon={<Save />}
              onClick={() => alert("hello")}
              href="#"
            >
              Save
            </Button>
            <Button
              color="primary"
              endIcon={<Delete />}
              onClick={() => alert("bye")}
              href="#"
            >
              Discard
            </Button>
          </ButtonGroup>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;

import { useState } from "react";
import {
  Button,
  ButtonGroup,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Paper,
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
      marginBottom: 0,
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
      <Container maxWidth="sm">
        <div className="App">
          <header className="App-header">
            <Typography variant="h2">Welcome to MUI</Typography>
            <Typography variant="subtitle1">
              for more examples see the materialUI docs
            </Typography>
            <ButtonStyle />
            <Grid container spacing={4} justify="center">
              <Grid item xs={12}>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
              <Grid item>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
              <Grid item>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
            </Grid>
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
      </Container>
    </ThemeProvider>
  );
}

export default App;

import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "./redux/slices/authSlice";

import RouteList from "./router";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from "@mui/material";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser(null));
  }, [dispatch]);

  const theme = createTheme({
    typography: {
      fontFamily: ["Nunito"].join(","),
    },
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouteList />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;

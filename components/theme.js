import { createTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createTheme({
  palette: {
    primary: {
      main: "#0000ff",
    },
    secondary: {
      main: green[500],
    },
  },
});

export default theme;
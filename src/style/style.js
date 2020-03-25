import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';

export const theme = createMuiTheme({
    typography: {
        fontSize: 15
    },
    palette: {
        primary: blue,
        secondary: grey
    }
  })

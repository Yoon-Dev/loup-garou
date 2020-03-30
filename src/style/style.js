import { createMuiTheme, createStyles, makeStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';

export const theme = createMuiTheme({
    typography: {
        fontSize: 15
    },
    palette: {
        primary: blue,
        secondary: grey,
    },
  })

export const useStyles = makeStyles(() => createStyles({
    m:{
        margin: '15px'
    },
    item: {
        display: 'flex',
        justifyContent: "center"
    },
    container: {
        alignItems: 'center'
    },
    containercodepage: {
        marginTop: "25px",
        justifyContent: "center"
    },
    containerfoot: {
        alignItems: 'flex-end !important'
    },
    center:{
          textAlign: 'center'
    },    
    video: {
        marginTop: "15px",
        minWidth: "100vw",
        height: "50vh"
    },
    center:{
        textAlign: 'center'
    },
    loaderlap:{
        maxWidth: "100%"
    },
    loader: {
        maxWidth: "20%"
    },
    card: {
        boxShadow: "0px 0px 51px 3px rgba(0,0,0,0.25)",
        padding: "20px"
    },
    box: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    boxtext: {
        display: 'flex',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
    },
    footer: {
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        top: 'auto !important', 
        minHeight: '8vh',
        padding: '1em'
    }, 
    click: {
        color: 'lightblue',
        display: 'flex',
        justifyContent: 'center',
        background: "url('https://media.giphy.com/media/l4FGjPobk7z4iFXPy/source.gif') 0px 0px no-repeat",
        backgroundSize: "cover",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        textShadow: "0.04em -0.06em #dbdbdb",
        overflow: "hidden",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    boxhead: {
        display: 'flex',
        justifyContent: ''
    },
    logo: {
        maxHeight: '8vh',
        padding: '1em'
    },
}));

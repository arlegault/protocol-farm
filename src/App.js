import './App.css';
import Main from './Main.js'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import VT323 from './Fonts/VT323-Regular.ttf'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
   //primary: '#00FF66',
    divider: '#000',
    text: {
        primary: '#00FF66',
        secondary: '#00FF66',
        },
    background: {
        default: '#1B1A1A',
        paper: '#1B1A1A',
    },
    action: {
        active: '#00FF66',
        selected: '#00FF66',

    }
  },
  typography: {
    fontFamily: 'VT323',
    fontSize: '30',
    fontWeight: 50,
  },
});

function App() {
console.log('app rendering...')
  return (
      <ThemeProvider theme={darkTheme}>
    <div className="App">
      <Main />
    </div>
        </ThemeProvider>

  );
}

export default App;

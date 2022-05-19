import './App.css';
import Main from './Components/Main.js'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import VT323 from './Fonts/VT323-Regular.ttf'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    text: '#00FF66',
    background: '#282828'
  },
  typography: {
    fontFamily: 'VT323',
    fontSize: '1.5rem',
    fontWeight: 50,
  },
});

function App() {
  return (
      <ThemeProvider theme={darkTheme}>
    <div className="App">
      <Main />
    </div>
        </ThemeProvider>

  );
}

export default App;

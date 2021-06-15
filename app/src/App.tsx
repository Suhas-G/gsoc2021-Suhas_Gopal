import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React, { useState } from 'react';
import ModalContainer from 'react-modal-promise';
import './App.scss';
import MenuBar from './components/menu';
import Editor from './core/editor';
import { GlobalState, IGlobalState } from './core/store';
import Board from './pages/board';


const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});



function App() {

  const editor = Editor.getInstance();
  const [state, setState] = useState<IGlobalState>({
    locked: editor.locked(),
    showingPackage: editor.showingPackage()
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App theme-dark">
        <MenuBar editor={editor} />
        <GlobalState.Provider value={{ state, setState }} >
          <Board editor={editor} />
        </GlobalState.Provider>
      </div>
      <ModalContainer />
    </ThemeProvider>
  );
}

export default App;

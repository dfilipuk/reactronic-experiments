import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/App';
import { AppModel } from './models/App.model';
import { Action } from 'reactronic';

export const appState: AppModel = Action.run("new App", () => new AppModel());

ReactDOM.render(<App />, document.getElementById('root'));

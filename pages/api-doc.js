import { RedocStandalone } from "redoc";
import * as React from 'react';
import logo from '../styles/logo.svg';

function apiDoc() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />

            <RedocStandalone spec="https://redocly.github.io/redoc/openapi.yaml" />
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      );
}

export default apiDoc;

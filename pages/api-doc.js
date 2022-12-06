import { RedocStandalone } from "redoc";
import * as React from 'react';
import logo from '../styles/logo.svg';
import api from "../openapi.json";

function apiDoc() {
      return (
            <RedocStandalone spec={api} />
      );
}

export default apiDoc;

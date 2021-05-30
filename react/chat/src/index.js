import React from "react";
import ReactDOM from "react-dom";
import { Layout } from "./components/Layout.jsx";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/src/service-worker.js', { scope: '/src/' }).then(function(reg) {
  
      if(reg.installing) {
        console.log('Service worker installing');
      } else if(reg.waiting) {
        console.log('Service worker installed');
      } else if(reg.active) {
        console.log('Service worker active');
      }
  
    }).catch(function(error) {
      // registration failed
      console.error('Registration failed with ' + error);
    });
  }

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
            <Layout />
        </PersistGate>
    </Provider>
    ,
    document.getElementById("main")
);
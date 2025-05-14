import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';   // ✅ Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // ✅ Bootstrap JS (includes Popper)


import './assets/plugins/daterangepicker/daterangepicker.css';
import './assets/plugins/tabler-icons/tabler-icons.min.css';
import './assets/plugins/select2/css/select2.min.css';
import './assets/plugins/fontawesome/css/fontawesome.min.css';
import './assets/plugins/fontawesome/css/all.min.css';
import './assets/css/style.css';
import { Provider } from 'react-redux';
import store from './store/store.jsx';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import $ from 'jquery';   // ✅ jQuery (optional: you can now use `$` anywhere)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);


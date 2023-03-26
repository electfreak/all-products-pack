import 'reset-css';
import fallbackStylesheetUrl from '!!file-loader!../exterrnal-libs/layout/layout-without-css-vars.css';
import { supportsCssVars, createLink } from '../exterrnal-libs/layout/utils';
import '../exterrnal-libs/layout/index.css'
import '../exterrnal-libs/breakpoints/index.css';

import App from './App';
import { createRoot } from 'react-dom/client';

if (!supportsCssVars()) {
  createLink(fallbackStylesheetUrl);
}

createRoot(document.getElementById('root')).render(<App />);

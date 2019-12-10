import './js/'
import './assets/scss/main.scss'

function requireAll(r){r.keys().forEach(r);}
requireAll(require.context('./assets/svg-icon/', true, /\.svg$/));
requireAll(require.context('./assets/svg-color-icon/', true, /\.svg$/));
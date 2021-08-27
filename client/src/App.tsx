import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

function App() {
  return <h1>Hello!</h1>;
}

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);

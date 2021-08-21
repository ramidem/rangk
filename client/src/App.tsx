import './App.css';

import User from '@rangk/common/src/User';

const user: User = {
  firstName: 'Marco',
  lastName: 'Polo',
}

function App() {
  return (
    <div className="App">
      <h1>Hello, {user.firstName}</h1>
    </div>
  );
}

export default App;

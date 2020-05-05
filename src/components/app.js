import React from 'react';
import Search from './search';
import List from './list';


function App() {
  return (
    <React.Fragment>
      <div className="App">
        <header>
          {/* Add some logo here */}
        </header>
        <main>
          <h1>Restaurant Finder</h1>
          <Search />
          <List />
        </main>
      </div>
    </React.Fragment>
  );
}

export default App;


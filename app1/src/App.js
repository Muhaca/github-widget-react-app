import React, { Suspense } from 'react';
const RemoteApp = React.lazy(() => import('app2/App'));

const App = () => {
  return (
    <div>
      <div
        style={{
          margin: '10px',
          padding: '10px',
          textAlign: 'center',
          backgroundColor: 'greenyellow',
        }}
      >
        <h1>App1</h1>
        <button component="a" href="http://localhost:3002/Page1.js">
          Page app 1{' '}
        </button>
        <button>Page app 2 </button>
        <button>Page app 3 </button>
      </div>
      <Suspense fallback={'loading...'}>
        <RemoteApp />
      </Suspense>
    </div>
  );
};

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';

function App () {
  return (
    <div>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, assumenda?</p>
    </div>
  )
}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);




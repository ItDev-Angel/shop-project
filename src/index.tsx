import React from 'react';
import ReactDOM from 'react-dom/client';
const name = 'Иван-Царевич';
function formatName(user:any) {
  return user.firstName + ' ' + user.lastName;
}
const user = {
  firstName: 'Марья',
  lastName: 'Моревна',
  avatarUrl: 'https://i.pinimg.com/736x/94/bb/6e/94bb6e2ba93089cba8b60e6d3ca7c00e.jpg'
};
const LinkUrl = <a href="https://www.reactjs.org"> link </a>;
const Img = <img src={user.avatarUrl} alt="img" width="200"/>;
const element = <h1>Здравствуй!, {name}, {formatName(user)}</h1>;
function getGreeting(user:any) {
  if (!user) {
    return <h1>Здравствуй, {formatName(name)}!</h1>;
  }
  return <h1>Здравствуй, незнакомец.</h1>;
}
const tag = (
  <div>
    <h1>Здравствуйте!</h1>
    <h2>Рады вас видеть.</h2>
  </div>
);
const title = user.firstName;
// Этот код безопасен:
const text = <h1>{title}</h1>;
const greeting = (
  <h1 className="greeting">
    Привет, happy!
  </h1>
);
const gree = React.createElement(
  'h1',
  {className: 'greeting'},
  'Привет, мир!'
);
// Примечание: этот код несколько упрощён.
const simple = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Привет, мирok!'
  }
};
function App () {
  return (
    <div>
      <h1>{simple.props.children}</h1>
      {gree}
      {greeting}
      {text}
      {tag}
      {LinkUrl}
      {Img}
      {element}
      {getGreeting(user)}
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, assumenda?</p>
    </div>
  )
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <> <App />
  </>
);

function tick() {
  const timer = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toISOString()} PM.</h2>
    </div>
  );
  root.render(timer);
}
setInterval(tick, 1000);

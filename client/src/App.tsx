import React from 'react';

const App: React.FC = () => {
  const [data, setData] = React.useState(null);

  // const getData = () => {
  //   fetch('/api')
  //     .then((result) => result.text())
  //     .then((res) => setData(res));
  // };
  return (
    <h1>hello world</h1>
  );
}

export default App;

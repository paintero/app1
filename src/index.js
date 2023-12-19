import React from 'react';
import ReactDOM from 'react-dom/client';

const myFirstElement = <h1>Hello Kitty!</h1>

const myTable = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>Jem</td>
    </tr>
    <tr>
      <td>Scout</td>
    </tr>
  </table>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);
root.render(myTable);



import React from 'react';

 export class Button extends React.Component {

  talk() {
    let speech = '';
    for (let i = 0; i < 50000; i++) {
      speech += 'bldasdfah ';
    }
    alert(speech);
  }
  render() {

  return <div><button onClick={this.talk}>
  Click me!
  </button></div>
  
  }
}




import React from "react";
import io from "socket.io-client";

const App = () => {
  var socket = io("https://mst-full-stack-dev-test.herokuapp.com/");
  socket.on('data-update', function (msg) {
    var element = document.getElementById("one");
    var newElement = `<tr id="one">
                        <td>${msg.First} </td>
                        <td>${msg.Last}</td>
                        <td>${msg.tournamentID}</td>
                        <td>${msg.Nationality}</td>
                      </tr>`
    element.insertAdjacentHTML('afterend', newElement)
  });
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Lastname</th>
          <th>TournamentID</th>
          <th>Nationality</th>
        </tr>
        <tr id="one">
        </tr>
      </table>
    </div >
  );
};

export default App;
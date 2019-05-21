import React from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import style from './style/App.css'
var data = require('./rushing.json');

class App extends React.Component {
  render() {
    const columns = [
     { name: "Player", label: "Player", options: {filter: true} },
     { name: "Team",label: "Team", options: {filter: false} },
     { name: "Pos",label: "Pos", options: {filter: false} },
     { name: "Att",label: "Att", options: {filter: false} },
     { name: "Att/G",label: "Att/G", options: {filter: false} },
     { name: "Yds",label: "Yds",options: {sort: true, filter: false} },
     { name: "Avg",label: "Avg", options: {filter: false} },
     { name: "Yds/G",label: "Yds/G", options: {filter: false} },
     { name: "TD",label: "TD",options: {sort: true, filter: false} },
     { name: "Lng",label: "Lng",options: {sort: true, filter: false} },
     { name: "1st",label: "1st", options: {filter: false} },
     { name: "1st%",label: "1st%", options: {filter: false} },
     { name: "20+",label: "20+", options: {filter: false} },
     { name: "40+",label: "40+", options: {filter: false} },
     { name: "FUM",label: "FUM", options: {filter: false} }
    ];
    const options = { filterType: 'checkbox'};
    
    return (
      <div>
        <div>
          <p id="title">theScore "the Rush" Interview</p>
          <MUIDataTable
            title={"NFL players' rushing statistics"}
            data={data}
            columns={columns}
            options={options}
          />
        </div>
        <div className={style.footer}>
         <p>
         View on <a href="https://github.com/ridhwaans/nfl-rushing">Github</a>&emsp;
         Made by <a href="https://github.com/ridhwaans">@ridhwaans</a>&emsp;
         Code licensed <a href="https://github.com/ridhwaans/nfl-rushing/blob/master/LICENSE">GNU GPLv3</a>
         </p> 
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));

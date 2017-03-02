// Dependencies
import React from 'react';  
import ReactDOM from 'react-dom';
import InsertRowTable from './components/insert-row-table/insert-row-table';

// Components
import App from './components/app/App.jsx';

// Styles
import './index.scss';

class InsertTable extends React.Component {
  render() {
    return (
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Insert Row Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/manipulation/insert-row-table.js</h5>
              <InsertRowTable />
            </div>
          </div>
        </div>
    );
  }
};

ReactDOM.render(<InsertTable />, document.getElementById('main'));
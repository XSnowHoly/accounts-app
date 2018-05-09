import React, { Component } from 'react';
import Record from './Record'

class Records extends Component {
  // 构造
    constructor(props) {
      super(props);
      // 初始状态
      this.state = {
        records: [
            {"id": 1, "date": "2018-01-09", "title": "收入", "amount": 20},
            {"id": 2, "date": "2018-01-03", "title": "录制视频收入", "amount": 210}
        ]
      };
    }
  render() {
    return (
      <div>
        <h2>Records</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Amounteval</th>
            </tr>
          </thead>
          <tbody>
          {this.state.records.map((record, i) => <Record record={record} />)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Records;

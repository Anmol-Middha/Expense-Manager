import React from 'react';
import axios from 'axios';
import Add from './Add.jsx';
import '../css/App.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {data: []};
    this.getData = this.getData.bind(this);
    }
  componentDidMount() {
      this.getData(this);
    }
    componentWillReceiveProps(nextProps) {
      this.getData(this);
    }
  getData(ev){
      axios.get('/findall')
        .then(function(response) {
          ev.setState({data: response.data});
        });
    }
  render() {
    console.log();
    return (
        <div>
          <Add/>
          <table>
            <thead>
              <tr><th></th><th className='desc-col'>Description</th><th className='button-col'>Amount</th><th className='button-col'>Month</th><th className='button-col'>Year</th></tr>
            </thead>
            <tbody>
              {
                 this.state.data.map(function(exp){
                   return  <tr><td className='counterCell'></td><td className='desc-col'>{exp.description}</td><td className='button-col'>{exp.amount}</td><td className='button-col'>{exp.month}</td><td className='button-col'>{exp.year}</td></tr>
                 })
              }
            </tbody>
          </table>
        </div>
      );
    }
  }

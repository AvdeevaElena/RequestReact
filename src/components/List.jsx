import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions';
import ListItem from './ListItem';
import "./style/style.css";
import { Layout } from 'antd';
import booksShelfs from './style/picture/booksShelfs.png'; 
const { Header} = Layout;

class List extends Component {
  state = {
    showForm: true,
    formValue: ""
  };

  inputChange = event => {
    this.setState({formValue: event.target.value});
  };

  formSubmit = event => {
    const {formValue} = this.state;
    const {addToDo} = this.props;
   
    event.preventDefault();
    addToDo({title: formValue});
    this.setState({formValue: ""});
  };

  renderForm = () => {
    const {showForm, formValue} = this.state;
    if (showForm) {
      return (
        <div id="todo-add-form" >
          <form onSubmit={this.formSubmit}>
<div className="input-field">
              <input 
                value={formValue}
                onChange={this.inputChange}
                id="toDoNext"
                type="text"
              />
              <label htmlFor="toDoNext">add new book's task for me to read</label>
            </div>
          </form>
          <span 
          onClick={this.formSubmit}
          className="btn-item"
        >
            <i className="text-item">add</i>
          </span>


        </div>
      );
    }
  };
  renderToDo() {
    const {data} = this.props;
    const toDos = _.map(data, (value, key) => {
      return <ListItem key={key} todoId={key} todo={value} />;
    });
    if (!_.isEmpty(toDos)) {
      return toDos;
    }
    return (
      <div className="col s10 offset-s1 center-align">
        <h4>You have no more book's tasks to read!</h4>
      </div>
    );
  }
  componentWillMount() {
    this.props.fetchToDos();
  }
  render() {
    const {showForm} = this.state;
    return (

      <div>
         <Header > 
         <img  src={booksShelfs} style={{ marginLeft: "200px"}} />
         <p   style={{ textAlign: "center"}}> made by React and me  <br /> avdeevaelena5@gmail.com  </p> 
         
         </Header>   
      <div className="to-do-list-container">
        <div className="row">
          {this.renderForm()}
          {this.renderToDo()}
        </div>
        <div className="fixed-action-btn">
          <button 
            onClick={() => this.setState({showForm: !showForm})}
            className="btn-floating btn-large orange darken-4"
          >
          {showForm ? (
            <i className="large material-icons">-</i>
          ) : (
            <i className="large material-icons">+</i>
          )}
          </button>
        </div>   
  
      </div>

      </div>
    );
  }
}

const mapStateToProps = ({data}) => {
  return {
    data
  }
}

export default connect(mapStateToProps, actions)(List);
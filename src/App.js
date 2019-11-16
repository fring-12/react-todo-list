import React, {Component} from 'react';
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';


class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item:'',
    editItem:false
  };
  handleChange = (e) =>{
    console.log('handle change')
  }
  handleSubmit = (e)=> {
    console.log('handle submit')
  }
  clearList = ()=> {
    console.log('clear list')
  }
  handleDelete = (id)=> {
    console.log(`handle delete ${id}`)
  }
  handleEdit = (id)=> {
    console.log(`handle delete ${id}`)
  }
  render() {
    console.log(this.state);

    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto com-md-8 mt-5 ">
              <h3 className="text-capitalize text-center">todo list</h3>
              <TodoInput
               item={this.state.item}
               handleChange={this.handleChange} 
               handleSubmit={this.handleSubmit} 
               editItem={this.state.editItem}
               />

              <TodoList
               items={this.state.items}
               clearList={this.clearList}
               handleDelete={this.handleDelete}
               handleEdit={this.handleEdit}
               />
          </div>
         
        </div>
        
      </div>
    );
  }
}

export default App;


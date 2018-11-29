import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title.js';
import TodoList from '../components/TodoList.js';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [{
                id: 1,
                  text: 'clean room'
                }, {
                id: 2,
                  text: 'wash the dishes'
                }, {
                id: 3,
                  text: 'feed my cat'
            }]
        };
    }
    
    //metoda dodawnia nowych zadań 
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),  //metoda stworzenia kombinacji cyfr połączona z kluczem ID
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }

    //usunięcie rzeczy do zrobienia
    removeTodo(id){
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }

    render() {
        return (
            <div className = {style.TodoApp}>
                <Title />
                <TodoList list={this.state.data} remove={this.removeTodo.bind(this)} />
            </div>
        );
    }
}
export default App;
import React, {useState} from "react";
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from "../item-status-filter";
import TodoList from '../todo-list';
import ItemAddForm from "../item-add-form";
import "./app.scss";

const App = () => {
  let maxId = 100;

  const createTodoItem = (label) => {
    return {
      label,
      important: false,
      done: false,
      id: maxId++
    }
  }

  const [todoData, setTodoData] = useState([
    createTodoItem('Drink Coffee'),
    createTodoItem('Learn React'),
    createTodoItem('Go to ATB Market')
  ]);
  const [term, setTerm] = useState('');
  const [filter, setFilter] = useState('all');
      
  const deleteItem = (id) => {
    const idx = todoData.findIndex((el) => el.id === id);
    const newTodoData = [...todoData.slice(0, idx), ...todoData.slice(idx+1)];
    setTodoData(newTodoData);
  };
    
  const addItem = (text) => {
    if(text.length > 0) {
      const newItem = createTodoItem(text);
      const newTodoData = [...todoData, newItem];
      setTodoData(newTodoData);
    }
  };
    
  const toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id);
      const oldItem = arr[idx];
      const newItem = {...oldItem, [propName]: !oldItem[propName]}
      
      return [...arr.slice(0, idx), newItem, ...arr.slice(idx+1)];
  }

  const onToggleImportant = (id) => {
    setTodoData(toggleProperty(todoData, id, 'important'));
  }

  const onToggleDone = (id) => {
    setTodoData(toggleProperty(todoData, id, 'done'));
  }

  const search = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    })
  }

  const onSearchChange = (newTerm) => {
    setTerm(newTerm);
  };

  const filterItems = (items, filter) => {
    switch(filter) {
      case 'all':
        return items;
      case 'active': 
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default: 
        return items;  
    }
  };

  const onFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const visibleItems = filterItems(search(todoData, term), filter);
  const doneCount = todoData.filter((el) => el.done).length;
  const todoCount = todoData.length - doneCount;

  return (
    <div className="app">        
      <div>
        <AppHeader todo={todoCount} done={doneCount}/>
      </div>
      <div className="search-filter">
        <SearchPanel onSearchChange={onSearchChange}/>
        <ItemStatusFilter filter={filter} onFilterChange={onFilterChange}/>
      </div>
        <TodoList todos={visibleItems} onDeleted={deleteItem} onToggleImportant={onToggleImportant} onToggleDone={onToggleDone}/>
        <ItemAddForm onItemAdded={addItem}/>
    </div>
  );
}
export default App;
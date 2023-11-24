import {createElement} from "./utils.js";
import React from 'react';
import './style.css';

function App({store}) {

    const list = store.getState().list;

    return (
        <div className ='app'>
            <div className="app-head">
                <h1>Приложение на чистом js</h1>
            </div>
            <div className="app-controls">
                <button onClick={() => store.addItem()}>Добавить</button>
            </div>
            <div className="app-center">
                <div className="list">{
                    list.map(item =>
                        <div key={item.code} className={"list-item" + (item.selected ? ' item_selected' : '')}
                        onClick={() => store.selectedItem(item.code)}> 
                            <div className='item'>
                                <div className= 'item-code'>{item.code}</div>
                                <div className= 'item-title'>{item.title + item.code}</div>
                                <div className= 'item-actions'>
                                    <button onClick={() => store.deleteItem(item.code)}>Удалить</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
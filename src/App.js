import React, {useState} from 'react';
import './App.css';
import {CardList} from "./components/CardList/CardList";

function App() {
    const [arr, changeArr] = useState(CardList);
    const changeList = (removedItem) => {
        if (removedItem !== 'first' && removedItem !== 'last') return;
        const newArr = [...arr];
        changeArr(newArr);
        removedItem === 'first' && newArr.shift();
        removedItem === 'last' && newArr.pop();
    }

    const [hiddenItem, setHiddenItem] = useState([]);
    const filteredArr = CardList.filter(item => !hiddenItem.includes(item.id));
    const changeItemList = () => {
        const itemShouldBeHidden = filteredArr[filteredArr.length - 1];
        if (!itemShouldBeHidden) return;
        setHiddenItem([...hiddenItem, itemShouldBeHidden.id]);
    }

    const revertItems = () => {
        setHiddenItem([]);
        setHidden([]);
    }

    const [hidden, setHidden] = useState([]);
    const filter = CardList.filter(item => !hidden.includes(item.id));
    const itemRemovingByItself = (item) => {
        if (!item) return;
        const clone = [...hidden];
        clone.push(item.id);
        setHidden(clone);
    }

    return (
        <div className="App">
            <ul>
                {arr.map(item => <li key={item.id}>{item.title}</li>)}
                <button onClick={() => changeList('first')}>remove first</button>
                <button onClick={() => changeList('last')}>remove last</button>
            </ul>
            <ul>
                {filteredArr.map(item => <li key={item.id}>{item.title}</li>)}
                <button onClick={changeItemList}>remove item</button>
                <button onClick={revertItems}>revert items</button>
            </ul>
            <ul>
                {filter.map(item => (<li key={item.id}>{item.title} -
                <button onClick={() => itemRemovingByItself(item)}>remove item</button></li>))}
                <button onClick={revertItems}>revert items</button>
            </ul>

        </div>
    );
}

export default App;

// 1 відмалювати список карточок базуючись на якомусь створеному вами масиві створити окрему кнопку, яка буде видаляти поточний перший елемент (або останній)  якщо у нас масив з 3 елементів і ми клікнули на кнопку 3 рази, то на екрані жодна карточка не має відмалюватись  (кнопки повернення до початкового стану не треба)

// 2 те саме, тільки з кнопкою реверт (повернутись до стану, де у нас видно 3 елемнети, як на початку)

// 3 задача з зірочкою) кожна карточка з завдання вище має мати кнопку, по кліку на яку, ми видаляємо зі списку саме її + реверт кнопка, щоб вернути все назад (ця кнопка одна дня всіх карточок, клікнули по ній і всі каркти вернулись назазд) (згадування функції фільтр в лекції було не просто так)
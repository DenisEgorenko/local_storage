import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    const [value, setValue] = useState(0)

    useEffect(()=>{
        let valueStr = (localStorage.getItem('counterValue'))

        if (valueStr){
            setValue(JSON.parse(valueStr))
        }
    }, [])


    useEffect(()=>{
        localStorage.setItem('counterValue', JSON.stringify(value))
    }, [value])

    const incHandler = () => {
        setValue(value + 1)
    }

    const clearLocalStorageHandler = () => {
        setValue(0)
    }
    //
    // const getFromLocalStorageHandler = () => {
    //     setValue(Number(localStorage.getItem('counterValue')))
    // }



    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
            {/*<button onClick={setToLocalStorageHandler}>setToLocalStorage</button>*/}
            <button onClick={clearLocalStorageHandler}>clearLocalStorage</button>
            {/*<button onClick={getFromLocalStorageHandler}>getFromLocalStorage</button>*/}
        </div>
    );
}

export default App;

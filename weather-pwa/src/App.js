import React, {useState} from 'react';
import './App.css';
import { fetchWeather } from './api/fetchWeather';

const App = () => {
    const [query, setQuery] = useState('');

    const search = async (e) => {
        if (e.key === 'Enter') {
            const data = fetchWeather(query);
            console.log(data);
        }
    }
    return (
        <div className="main-container">
            <input type="text" className="search" 
                placeholder="Type here..." 
                value={query} onChange={(e) => setQuery(e.target.value)}
                onKeyPress={search}
            />
        </div>
    );
}

export default App;
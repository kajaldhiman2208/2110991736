import React, { useState } from 'react';
import axios from 'axios';

const AverageCalculator = () => {
    const [numberId, setNumberId] = useState('p');
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const fetchNumbers = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/numbers/${numberId}`);
            setData(response.data);
            setError(null);
        } catch (err) {
            setError('Failed to fetch data');
            setData(null);
        }
    };

    return (
        <div>
            <select value={numberId} onChange={(e) => setNumberId(e.target.value)}>
                <option value="p">Prime</option>
                <option value="f">Fibonacci</option>
                <option value="e">Even</option>
                <option value="r">Random</option>
            </select>
            <button onClick={fetchNumbers}>Fetch Numbers</button>
            {error && <div>{error}</div>}
            {data && (
                <div>
                    <h3>Stored Numbers: {data.storedNumbers.join(', ')}</h3>
                    <h3>Average: {data.average}</h3>
                </div>
            )}
        </div>
    );
};
export default AverageCalculator;

import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handle = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handle);
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    console.log(debouncedValue + '__2');

    return debouncedValue;
}

export default useDebounce;

import { useState, forwardRef } from 'react';

function Image({ src: src1, alt, className }, ref) {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(
            'https://www.shutterstock.com/image-vector/caution-exclamation-mark-white-red-260nw-1055269061.jpg',
        );
    };

    return <img className={className} ref={ref} src={fallback || src1} alt={alt} onError={handleError} />;
}

export default forwardRef(Image);

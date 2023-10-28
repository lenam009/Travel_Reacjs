import { useState, forwardRef } from 'react';

// const Image = forwardRef(({ ...props }, ref) => <img ref={ref} {...props} />);

function Image({ src: src1, alt, className }, ref) {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(
            'https://www.shutterstock.com/image-vector/caution-exclamation-mark-white-red-260nw-1055269061.jpg',
        );
    };

    return <img className={className} ref={ref} src={fallback || src1} alt={alt} onError={handleError} />;
}

// const Image = (src, alt) => {
//     return <img src={src} />;
// };

export default forwardRef(Image);

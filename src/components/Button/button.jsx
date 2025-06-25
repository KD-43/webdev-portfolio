import { useRef, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import './button.scss'

function ButtonComponent ({ children, size, color, addClass, addId, disabled = false, onTrigger, ...otherProps }) {
    const baseClass = "btn";
    const mergeClasses = `${baseClass} ${addClass || ''}`.trim();
    let btnSize;
    let btnColor;

    // let [ count, setCount ] = useState(0);

    // function handleClick () {
    //     setCount(count + 1);
    // }

    if (size) {
        switch (size) {
            case 'sm':
                btnSize = 'sm';
                break;
            case 'md':
                btnSize = 'md';
                break;
            case 'lg':
                btnSize = 'lg';
                break;
            default:
                btnSize = 'sm';
                break;
        }
    }

    if (color) {
        switch (color) {
            case 'blue':
                btnColor = 'blue';
                break;
            case 'darkBlue':
                btnColor = 'darkBlue';
                break;
            case 'darkGrey':
                btnColor = 'darkGrey';
                break;
            case 'mediumGrey':
                btnColor = 'mediumGrey';
                break;
            case 'lightGrey':
                btnColor = 'lightGrey';
                break;
            case 'black':
                btnColor = 'black';
                break;
            case 'white':
                btnColor = 'white';
                break;
            default:
                btnColor = 'blue';
                break;
        }
    }
    
    return (
        <ErrorBoundary fallbackRender={<div>Something went wrong with Btn {btnSize}, color: {btnColor}</div>}>
            <>
                <button onClick={onTrigger} data-label={children} disabled={disabled} className={mergeClasses + ` btn-${btnSize} btn-${color}`} id={addId} {...otherProps}>
                    {children}
                </button>
            </>
        </ErrorBoundary>
    );
}

export default ButtonComponent
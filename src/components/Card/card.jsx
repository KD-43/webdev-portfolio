import { useEffect, useState} from 'react'
import './card.scss'

function CardComponent ({ onClick, addClassToBase, addClassToHeader, addClassToBody, addClassToFooter, title, children, footer  }) {

    const defaultClassBase = 'card';
    const defaultClassHeader = 'card-header';
    const defaultClassBody = 'card-body';
    const defaultClassFooter = 'card-footer';


    const combineClassBase = `${defaultClassBase} ${addClassToBase || ''}`.trim();
    const combineClassHeader = `${defaultClassHeader} ${addClassToHeader || ''}`.trim();
    const combineClassBody = `${defaultClassBody} ${addClassToBody || ''}`.trim();
    const combineClassFooter = `${defaultClassFooter} ${addClassToFooter || ''}`.trim();

    useEffect(() => {
        const handleCardClick = (event) => {
            if (event.key === 'click') {
                onClick();
            }
        };

        if (onClick) {
            document.addEventListener('keydown', handleCardClick);
        };

        return () => {
            document.removeEventListener('keydown', handleCardClick);
        }

    }, [onClick]);

    return (
        <>
            <div className={combineClassBase} onClick={onClick}>
                <div className={combineClassHeader}>{title}</div>
                <div className="card-border mu-0"></div>
                <div className="card-content">
                    <div className={combineClassBody}>{children}</div>
                </div>
                <div className="card-border mu-0"></div>
                <div className={combineClassFooter}>{footer}</div>
            </div>
        </>
    )
}

export default CardComponent
import React from "react";
import cl from './CustomModal.module.css'
const CustomModal = ({children, visible, setVIsible}) => {

    const rootClasses = [cl.customModal]

    if (visible) {
        rootClasses.push(cl.active);
    }

    return (
        <div 
            className={rootClasses.join(' ')} 
            onClick={() => setVIsible(false)}>
                <div 
                    className={cl.customModalContent} 
                    onClick={(e) => e.stopPropagation()}>
                        {children}
                </div>
        </div>
    )
}

export default CustomModal;
import React from "react";
import cl from './CustomModal.module.css'
const CustomModal = ({children, visible, setVIsible}) => {

    const rootClasses = [cl.customModal]

    if (visible) {
        rootClasses.push(cl.active);
    }

    return (
        <div className={rootClasses.join(' ')}>
            <div className={cl.customModalContent}>
                {children}
            </div>
        </div>
    )
}

export default CustomModal;
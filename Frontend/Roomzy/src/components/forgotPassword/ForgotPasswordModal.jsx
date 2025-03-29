import React from 'react';
import './ForgotPasswordModal.css';
import ForgotPassword from './ForgotPassword';

const ForgotPasswordModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="forgot-password-modal" onClick={(e) => e.stopPropagation()}>
                <ForgotPassword onClose={onClose} />
            </div>
        </div>
    );
};

export default ForgotPasswordModal;
import React, { useEffect } from "react";
import { User } from "../../api/UserApi";
import "./UserModal.css";

interface UserModalProps {
    user: User | null;
    isOpen: boolean;
    onClose: () => void;
}

export function UserModal({ user, isOpen, onClose }: UserModalProps) {

    const handleClose = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className={`modal-backdrop ${isOpen ? 'open' : 'close'}`}
            onClick={handleClose}
        >
            <div className={`modal-content ${isOpen ? 'open' : 'close'}`}>
                <button
                    className="modal-close"
                    onClick={handleClose}
                    aria-label="Закрыть модальное окно"
                >
                    ×
                </button>

                <div className="modal-header">
                    <h2 className="modal-title">{user?.name}</h2>
                </div>

                <div className="modal-body">
                    <div className="info-section">
                        <div className="info-item">
                            <span className="info-label">Телефон:</span>
                            <span className="info-value">+ {user?.phone}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Почта:</span>
                            <span className="info-value">{user?.email}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Дата приема:</span>
                            <span className="info-value">
                                {user?.hire_date ? new Date(user.hire_date).toLocaleDateString('ru-RU') : ''}
                            </span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Должность:</span>
                            <span className="info-value">{user?.position_name}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Подразделение:</span>
                            <span className="info-value">{user?.department}</span>
                        </div>
                    </div>

                    <div className="info-section">
                        <h3 className="section-title">Дополнительная информация:</h3>
                        <p className="additional-info">
                            Разработчики используют текст в качестве заполнителя макта страницы.
                            Разработчики используют текст в качестве заполнителя макта страницы.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
} 
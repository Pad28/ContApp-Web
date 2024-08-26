import React from 'react';
import "../../styles/components/modals/Modal.css";
import { Button, InputPrimary } from "..";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (value: string) => void;
    placeholder: string;
    inputType: string;
}

export const Modal = ({ isOpen, onClose, onSave, placeholder, inputType }: ModalProps) => {
    const [inputValue, setInputValue] = React.useState("");

    const handleSave = () => {
        onSave(inputValue);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <InputPrimary
                    placeholder={placeholder}
                    type={inputType}
                    onChange={(value) => setInputValue(value)}
                    style={{ width: "100%" }}
                    icon="edit"
                />
                <div className="modal-buttons">
                    <Button
                        text="Cancelar"
                        onClick={onClose}
                        style={{ backgroundColor: "red", color: "white", width: "48%" }}
                    />
                    <Button
                        text="Aceptar"
                        onClick={handleSave}
                        style={{ backgroundColor: "green", color: "white", width: "48%" }}
                    />
                </div>
            </div>
        </div>
    );
};

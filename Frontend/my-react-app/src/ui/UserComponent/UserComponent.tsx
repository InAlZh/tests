import React from "react";
import "./UserComponent.css";
import { User } from "../../api/UserApi";

export interface UserProps {
    data: User;
    onClick?: (user: User) => void;
}

export function UserComponent({ data, onClick }: UserProps) {
    const handleClick = () => {
        if (onClick) {
            onClick(data);
        }
    };

    return (
        <div className="card" onClick={handleClick} style={{ cursor: 'pointer' }}>
            <h1 className="card-title">{data.name}</h1>
            <p className="card-text">
                <img src='tel.svg' alt="phone" />
                + {data.phone}</p>
            <p className="card-text">
                <img src='email.svg' alt="mail" />
                {data.email}</p>
        </div>
    );
}

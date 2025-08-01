import React from "react";
import "./UsersListComponent.css";
import { UsersList, User } from "../../api/UserApi";
import { UserComponent } from "../UserComponent/UserComponent";

export interface UsersListProps {
    data: UsersList;
    onUserClick?: (user: User) => void;
}

export function UsersListComponent({ data, onUserClick }: UsersListProps) {
    return (
        <div className="users">
            <ul className="users-list">
                {data.map((user) => (
                    <li key={user.id}>
                        <UserComponent
                            data={user}
                            onClick={onUserClick}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
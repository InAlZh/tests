import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersList } from "../../api/UserApi";
import { UsersListComponent } from "../UsersListComponent/UsersListComponent";
import { Loader } from "../Loader/Loader";
import { UserModal } from "../UserModal/UserModal";
import { User } from "../../api/UserApi";
import React from "react";
import { RootState } from "../../store/store";
import { openModal, closeModal } from "../../store/modalSlice";

interface FetchUsersListViewProps {
    searchTerm: string;
}

export function FetchUsersListView({ searchTerm }: FetchUsersListViewProps) {
    const dispatch = useDispatch();
    const { isModalOpen, selectedUser } = useSelector((state: RootState) => state.modal);

    const handleUser = (user: User) => {
        dispatch(openModal(user));
    };

    const handleCloseModal = () => {
        dispatch(closeModal());
    };

    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ["users", searchTerm],
        queryFn: () => fetchUsersList(searchTerm),
        enabled: true,
    });

    if (isLoading) return <Loader />;

    if (error) {
        return (
            <div>
                <span>Ошибка: {error.message}</span>
                <button onClick={() => refetch()}>
                    Попробовать снова
                </button>
            </div>
        );
    }

    if (!data) {
        return <div>Нет данных</div>;
    }

    return (
        <>
            <UsersListComponent
                data={data.data}
                onUserClick={handleUser}
            />
            <UserModal
                user={selectedUser}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </>
    );
}
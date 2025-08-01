import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../store/searchSlice";
import { openModal, closeModal } from "../../store/modalSlice";
import { RootState } from "../../store/store";
import "./Search.css";

export function Search() {
    const [localSearchTerm, setLocalSearchTerm] = useState("");
    const dispatch = useDispatch();

    const searchTerm = useSelector((state: RootState) => state.search.searchTerm);

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(setSearchTerm(localSearchTerm));
        }, 300);

        return () => clearTimeout(timer);
    }, [localSearchTerm, dispatch]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalSearchTerm(e.target.value);
    };

    return (
        <div className="search">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search"
                    value={localSearchTerm}
                    onChange={handleInputChange}
                />
                <img src='search.svg' alt="search" className="search-icon" />
            </div>
        </div>
    );
}

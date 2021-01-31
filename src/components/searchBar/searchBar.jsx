import React from 'react';
import { useDispatch } from 'react-redux';
import { ActionCreator } from "../../store/actions"

export const SearchBar = () => {
    const dispatch = useDispatch();
    if (ActionCreator.filterLinks && ActionCreator.filterLinks != null) {
        return (
            <div className="search">
                <form className="search--input">
                    <input
                        type="text"
                        placeholder="Search"
                        onChange={e => dispatch(ActionCreator.filterLinks(e.target.value))}
                    />
                </form>
            </div>
        )
    }
}
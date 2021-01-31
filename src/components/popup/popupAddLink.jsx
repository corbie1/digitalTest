import React, {   useCallback, useRef } from 'react';
import { ActionCreator } from "../../store/actions"
import {  useDispatch } from 'react-redux';
import Popup from './popup'
import styled from 'styled-components';

export const AddLink = () => {

    const [isOpen, setIsOpen] = React.useState(false);
    const Input = styled.input`
    border-radius: 3px;
    border: 1px solid green;
    display: block;
    margin: 0 0 1em;
    padding: 10px;
    `
    const Select = styled.select`
    display: block:
    border-radius: 3px;
    border: 1px solid green;
    display: block;
    padding: 10px;
    margin: 0 0 1em;
    `


    function saveToLocalStorage(item) {
        var existingGroups = JSON.parse(localStorage.getItem("allGroups"));
        if (existingGroups == null) existingGroups = [];
        existingGroups.push(item);
        localStorage.setItem("allGroups", JSON.stringify(existingGroups));
    }


    const name = useRef(null);
    const link = useRef(null);
    const group = useRef(null);

    const dispatch = useDispatch();

    const onSubmit = useCallback((e) => {
        var newGroup = {
            group: group.current.value,
            link: {
                name: name.current.value,
                link: link.current.value
            }
        }
        saveToLocalStorage(newGroup)
        e.preventDefault();
        dispatch(ActionCreator.addLink({
            group: group.current.value,
            link: {
                name: name.current.value,
                link: link.current.value
            }
        }));
        name.current.value = '';
        link.current.value = '';

        return false;
    }, [dispatch, name, link, group]);

    var optionState;

    return (
        <>
            <button
                onClick={() => {
                    setIsOpen(true);
                }}
            >
                Добавить
            </button>
            <Popup
                onClose={() => {
                    setIsOpen(false);
                }}
                open={isOpen}
            >
                <form className="form__addLink" onSubmit={onSubmit}>
                    <Input placeholder="Название" type="name" ref={name} />
                    <Input placeholder="Ссылка" type="text" ref={link} />
                    <Select value={optionState} ref={group}>
                        <option value="architects">Architects</option>
                        <option value="arctic monkeys">Arctic monkeys</option>
                        <option value="wildways">Wildways</option>
                        <option value="deuce">Deuce</option>
                    </Select>
                    <button>Добавить</button>
                </form>
                <button
                    onClick={() => {
                        setIsOpen(false);
                    }}
                >
                    Закрыть
                </button>
            </Popup>
        </>
    );
}
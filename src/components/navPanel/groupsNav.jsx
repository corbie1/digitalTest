import React, { useState, useEffect, useCallback } from 'react';
import { ActionCreator } from "../../store/actions"
import { useSelector, useDispatch } from 'react-redux';
import { history } from '../../history.js'
import { groupListSelector } from '../../store/selectors'
import { Switch, Route, Link } from "react-router-dom";
import { Groups } from '../groupsInfo/sortedGroups'
import routeConfig from '../../config/routes';


export const NavLinks = () => {
    const groups = useSelector(groupListSelector)
    return (
        <div className="nav">
            <Link
                className="nav__item"
                to={'/'}
            >Главная</Link>
            {Object.keys(groups).map((key, i) => (
                <>
                    <Link
                        className="nav__item"
                        data-index={i}
                        to={'/group/' + groups[key].name}
                    >
                        {groups[key].name}
                    </Link>
                </>
            ))}
        </div>
    );
}


import React from 'react';
import { useSelector, } from 'react-redux';
import { groupListSelector } from '../../store/selectors'
import { Link } from "react-router-dom";


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


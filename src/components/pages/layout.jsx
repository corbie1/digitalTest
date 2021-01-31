import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterLinksSelector, groupListSelector } from '../../store/selectors'
import { NavLinks } from '../navPanel/groupsNav'
import { Groups } from '../groupsInfo/sortedGroups'
import { AddLink } from '../popup/popupAddLink'
import { SearchBar } from '../searchBar/searchBar'




export const Layout = () => {
    const filterLinks = useSelector(filterLinksSelector);

    return (
        <div className="block__inner">
            <SearchBar />
            <AddLink />
            <NavLinks />
            <Groups content={filterLinks} />
        </div>
    )
}



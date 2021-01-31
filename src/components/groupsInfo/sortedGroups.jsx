import React, { useState, useEffect, useCallback } from 'react';
import { ActionCreator } from "../../store/actions"
import { useSelector, useDispatch } from 'react-redux';
import { history } from '../../history.js'
import { useParams } from "react-router-dom";
import { groupListSelector } from '../../store/selectors'
import { AllGroups } from './allGroups'
import { groups } from '../../mocks/groups';

export const Groups = (props) => {
    let { id } = useParams();
    console.log(props.content);

    return (
        <>
            {id ?
                (props.content).map((item) => {
                    if (item.name == id) {
                        return item.list.map((elem) => (
                            <>
                                <div className="link__name">{elem.name} - <a href={"http://" + elem.link}>Ссылка</a></div>
                            </>
                        ))
                    }
                }
                )
                : <AllGroups sort={props} />
            }
        </>
    )
}


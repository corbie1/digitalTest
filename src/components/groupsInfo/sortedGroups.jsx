import React from 'react';
import { useParams } from "react-router-dom";
import { AllGroups } from './allGroups'

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


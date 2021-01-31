import React from 'react';

export const AllGroups = (props) => {
    const groups = props.sort.content;


    return (
        <>
            {
                (groups).map((item) => (
                    (item).list.map((elem) => (
                        <>
                            <div className="link__name">{elem.name} - <a href={"http://" + elem.link}>Ссылка</a></div>
                        </>
                    ))

                ))
            }
        </>
    )
}


import { ActionType } from './action-types';

// Передача данных в стор 
export const ActionCreator = {
    setGroupList: (groups) => ({
        type: ActionType.SET_GROUP_LIST,
        payload: groups
    }),
    addLink: (link) => ({
        type: ActionType.ADD_LINK,
        payload: link
    }),
    filterLinks: (filter) => ({
        type: ActionType.FILTER_LINKS,
        payload: filter
    }),

};

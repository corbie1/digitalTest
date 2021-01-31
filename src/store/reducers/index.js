import { ActionType } from '../action-types';
import { groups } from '../../mocks/groups';


const getInitialGroups = (groups) => {
  const existingGroups = localStorage.getItem("allGroups");
  if (!existingGroups) return groups;
  const parsedGroups = JSON.parse(existingGroups);

  parsedGroups.forEach((parsedGroups) => {
    groups[parsedGroups.group] = {
      ...groups[parsedGroups.group],
      list: [
        ...groups[parsedGroups.group].list,
        {
          ...parsedGroups.link
        }
      ]
    }
  });

  return groups;
};

const initialState = {
  error: '',
  groupList: getInitialGroups(groups),
  filterParam: ''
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.ADD_LINK:
      const { payload } = action;
      return {
        ...state,
        groupList: {
          ...state.groupList,
          [payload.group]: {
            name: payload.group,
            list: [...state.groupList[payload.group].list, { ...payload.link }]
          }
        }
      }
    case ActionType.FILTER_LINKS:
      return {
        ...state,
        filterParam: action.payload
      }
    default: return state;
  }
}
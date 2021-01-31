import { createSelector } from 'reselect';


export const groupListSelector = (state) => state.groupList;

export const filterParamSelector = (state) => state.filterParam;

export const filterLinksSelector = createSelector(
    groupListSelector,
    filterParamSelector,
    (groups, filterParam) => {
        const sortedArr = [];

        Object.keys(groups).map((key) => {
            const links = groups[key].list.filter((item) => {
                return item.name.toLowerCase().includes(filterParam.toLowerCase());
            })

            sortedArr.push({
                ...groups[key],
                list: [
                    ...links,
                ],
            });
        });
        console.log(sortedArr)
        return sortedArr;
    }
);
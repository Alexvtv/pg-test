export const addNews = (state, action) => {
    state.list = [...state.list, {...action.payload, published: false}];
};
export const changeList = (state, action) => {
    state.list = action.payload;
};

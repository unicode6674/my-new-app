import {GET_LIST, CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './../actionTypes'

export const getListAction  = (data)=>({
    type: GET_LIST,
    data
});

export const changeInputAction = (value)=>({
    type: CHANGE_INPUT,
    value
});

export const addItemAction = ()=>({
    type: ADD_ITEM,
});

export const deleteItemAction = (index)=>({
    type: DELETE_ITEM,
    index
});


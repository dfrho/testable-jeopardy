import rootReducer from './index';
import * as actions from '../actions/';
import { category, categories } from '../data/fixtures';

describe ('root reducer', () => {
    it('returns the initial state', () => {
        expect(rootReducer({}, {})).toEqual({
            category: {},
            categories: []
        });
    })

    it('loads the categories', () => {
        expect(rootReducer({}, {type: actions.SET_CATEGORIES, categories})).toEqual({
            category: {},
            categories
        });
    })

    it('picks a category', () => {
        expect(rootReducer({}, { type: actions.PICK_CATEGORY, category }))
        .toEqual({ categories: [], category });
    });


})

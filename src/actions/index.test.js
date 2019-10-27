import * as actions from './index';
import { category, categories } from '../data/fixtures';

describe('actions', () => {
    it('creates an action to set all categories', () => {
        const expectedAction = {
            type: actions.SET_CATEGORIES,
            categories
        }
        expect(actions.setCategories(categories)).toEqual(expectedAction);
    });

    it('creates an action to pick a category', () => {
        const expectedAction = {
            type: actions.PICK_CATEGORY,
            category
        }
        expect(actions.pickCategory(category)).toEqual(expectedAction);
    });

});

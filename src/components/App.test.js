import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { categories } from '../data/fixtures';

const props = { categories };

describe ('App', () => {
    const app = shallow(<App {...props}/>);

    it('renders the title correctly', () => {
        expect(app.find('h2').first().text()).toEqual('Jeopardy!');
    })

    it('renders the categories correctly', () => {
        expect(app.find('Link').length).toEqual(categories.length);
    })

    it('titles each category link corrrectly', () => {
        app.find('Link h4').forEach((linkTitle, index) => {
            expect(linkTitle.text()).toEqual(categories[index].title);
        });
    })

});

import React from 'react';
import { shallow } from 'enzyme';
import Clue from './Clue';
import { clue } from '../data/fixtures';

const props = { clue };

describe ('Clue', () => {
    let clueWrapper = shallow(<Clue {...props}/>);

    it('renders the value correctly', () => {
        expect(clueWrapper.find('h4').first().text()).toEqual(clue.value.toString());
    })

    it('renders the question correctly', () => {
        expect(clueWrapper.find('h5').first().text()).toEqual(clue.question);
    })

    it('renders the answer correctly', () => {
        expect(clueWrapper.find('h5').at(1).text()).toEqual(clue.answer);
    })

    it('initially renders the answer as invisible', () => {
        expect(clueWrapper.find('h5').at(1).hasClass('text-hidden')).toBe(true);
    })

    it('initializes local state reveal to false', () => {
        expect(clueWrapper.state().reveal).toBe(false);
    })

    describe('when rendering a clue with no value', () => {
        beforeEach(()=>{
            props.clue.value = undefined
            clueWrapper = shallow(<Clue {...props}/>);
        });

        it('renders the value as undefined option', () => {
            expect(clueWrapper.find('h4').first().text()).toEqual('bet value');
        });

        afterEach(()=>{
            props.clue.value = 500;
            clueWrapper = shallow(<Clue {...props}/>);
        });
    });

    describe('when clicking on question', () => {
        beforeEach(()=>{
            clueWrapper.find('h5').first().simulate('click')
        });

        it('renders the answer correctly as visible', () => {
            expect(clueWrapper.find('h5').at(1).hasClass('text-visible')).toBe(true);
        })

        it('toggles the reveal state to false after clicking again', () => {
            expect(clueWrapper.state().reveal).toBe(false);
        })

        it('then back to true when clicking once more', () => {
            expect(clueWrapper.state().reveal).toBe(true);
        })
    });

});

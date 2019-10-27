import React from 'react';
import { mount, shallow } from 'enzyme';
import { Category, LinkedCategory } from './Category';
import { categories, clues } from '../data/fixtures';
import fetchMock from 'fetch-mock';

// TODO: submit this module as fix for courseware MR

const props = { category: categories[0] };

describe('Category', () => {

  afterEach(()=> {
    fetchMock.reset();
    fetchMock.restore();
  })

  describe('when creating a new category', () => {
    let category;

    beforeEach(done => {
      fetchMock.get(`http://jservice.io/api/clues?category=${props.category.id}`, clues)

      category = mount(<Category {...props} />);

      setTimeout(()=> {
        category.update();
        done()
      })
    });

    it('initializes the clues in state', () => {
      expect(category.state().clues).toEqual(clues);
    });

    it('renders the category title', () => {
      expect(category.find('h2').text()).toEqual(props.category.title);
    });

    it('initializes the correct number of clues', () => {
     expect(category.state().clues).toEqual(clues);
    });

    it('renders the correct number of clues', () => {
     expect(category.find('Clue').length).toEqual(clues.length);
    });
  });
});

describe('LinkedCategory', () => {
  const linkedCategory = shallow(<LinkedCategory />);

  it('creates the link to navigate home', () => {
    expect(linkedCategory.find('Link h4').text()).toEqual('Home');
  });

  it('creates a category component', () => {
    expect(linkedCategory.find('Category').exists()).toBe(true);
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import PokemonSearch from '../components/Pokemons/PokemonSearch';
import expect from 'expect';
import { shallow } from 'enzyme';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});



describe('<PokemonSearch />', () => {

  it('exist', () => {
    const wrapper = shallow(<PokemonSearch value={inputValue} />)
    expect(wrapper.length).toEqual(1);
  });

  it('has pokemon image', () => {
    const wrapper = shallow(<PokemonSearch value={inputValue} />)
    expect(wrapper.find('img').length).toEqual(1);
  });

  it('has pokemon name', () => {
    const wrapper = shallow(<PokemonSearch value={inputValue} />)
    expect(wrapper.find('h2').length).toEqual(1);
  });

});

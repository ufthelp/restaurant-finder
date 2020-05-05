import React from 'react';
import PropTypes from 'prop-types';
import { SortMethods } from '../../actions';

const { NAME, PRICE } = SortMethods;

function SelectSortMethod({ property, onChange }) {
  return (
    <select value={property} onChange={event => onChange(event.target.value)}>
        <option value={NAME}>Name</option>
        <option value={PRICE}>Price</option>
    </select>
  );
}

SelectSortMethod.propTypes = {
  property: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectSortMethod;

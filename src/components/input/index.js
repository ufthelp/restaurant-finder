
import React from 'react';

import { connect } from 'react-redux';

const Input = ({item, onChange}) => {
    const placehoder = `Type ${name} to search`;
    return (
        <div>
            <label htmlFor="search-input-city">{name}</label>
            <input 
                name={name}
                type="search"
                placeholder="Enter City to search restaurants..."
                aria-label="Search"
                onChange={event => onChange(event.target.value)}
                placeholder={placehoder}
                id="search-input-city" />
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    // change the sort property to the selected option
    //onChange: event => dispatch(setSortMethod(event.target.value)),
});


//export default Input;

export default connect(null, mapDispatchToProps)(Input);

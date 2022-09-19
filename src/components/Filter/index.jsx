import PropTypes from 'prop-types';
import { Input } from '../styles';
import { FilterBlock } from './styles';

export const Filter = ({ filter, handleFilterChange }) => {
  return (
    <FilterBlock>
      <p>Find contacts by name</p>
      <Input
        type="text"
        name="filter"
        onChange={handleFilterChange}
        value={filter}
      />
    </FilterBlock>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  handleFilterChange: PropTypes.func,
};

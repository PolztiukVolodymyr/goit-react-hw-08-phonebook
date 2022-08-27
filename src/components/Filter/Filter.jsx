import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ filter, onChange }) => {

   return (
      <label className={css.label}>
         Filter
         <input
            type="text"
            name="filter"
            value={filter}
            onChange={onChange}
         />
      </label>
   );
};

export default Filter;

Filter.propTypes = {
   filter: PropTypes.string,
   onChange: PropTypes.func,
}

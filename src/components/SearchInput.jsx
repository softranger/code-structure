import React, { useState, useMemo } from 'react';
import { debounce } from 'lodash';

export default function SearchInput({ onSearch, placeholder }) {
  const [value, setValue] = useState('');

  // Memoized debounce function to avoid recreating on every render
  const debouncedSearch = useMemo(() => {
    return debounce(onSearch, 500); // wait 500ms after user stops typing
  }, [onSearch]);

  const handleChange = (e) => {
    const val = e.target.value;
    setValue(val);
    debouncedSearch(val); // Trigger debounced search
  };

  return (
    <input
      type="text"
      className="form-control"
      value={value}
      onChange={handleChange}
      placeholder={placeholder || 'Search...'}
    />
  );
}

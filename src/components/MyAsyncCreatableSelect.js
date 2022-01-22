import { useState } from 'react';
import AsyncCreatableSelect from 'react-select/async-creatable';

function MyAsyncCreatableSelect({
  name,
  defaultOptions,
  value,
  onChange,
  onInputChange,
  onCreateOption,
  loadOptions,
  placeholder,
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = function (inputValue) {
    console.log(inputValue);
    onChange(inputValue);
  };

  const handleCreate = async function (inputValue) {
    try {
      setIsLoading(true);
      await onCreateOption(inputValue);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <AsyncCreatableSelect
      name={name}
      className="async-select-container"
      classNamePrefix="async-select"
      value={value}
      onChange={handleChange}
      onInputChange={onInputChange}
      defaultOptions={defaultOptions}
      onCreateOption={handleCreate}
      loadOptions={loadOptions}
      isLoading={isLoading}
      placeholder={placeholder}
      maxMenuHeight={200}
    />
  );
}
export default MyAsyncCreatableSelect;

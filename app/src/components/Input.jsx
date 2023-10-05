import React from 'react';

const Input = ({ label, value, onChange }) => {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={`Enter ${label}`}
      />
    </div>
  );
};

export default Input;

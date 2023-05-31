import React from 'react';


const FormInput = ({ id, type, label, subText, required }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} name={id} id={id} required={required} />
      {subText && (
        <div style={{ textAlign: 'end' }}>
          <sub>{subText}</sub>
        </div>
      )}
    </div>
  );
};

export default FormInput;

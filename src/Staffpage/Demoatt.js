import React, { useState,useEffect } from 'react';
import axios from 'axios'
function Demoatt() {
                   // State to hold selected values
  const [selectedValues, setSelectedValues] = useState([]);

  const Checkbox = ({ label, checked, onChange }) => (
                    <label>
                      <input type="checkbox" checked={checked} onChange={onChange} />
                      {label}
                    </label>
                  );

                  const [checkboxes, setCheckboxes] = useState([{ label: 'Checkbox 1', checked: false }]);

                  const handleCheckboxChange = (index) => {
                    const newCheckboxes = [...checkboxes];
                    newCheckboxes[index].checked = !newCheckboxes[index].checked;
                    setCheckboxes(newCheckboxes);
                  };
                
                  const addCheckbox = () => {
                    setCheckboxes([...checkboxes, { label: `Checkbox ${checkboxes.length + 1}`, checked: false }]);
                  };
                
                  return (
                    <div>
                      {checkboxes.map((checkbox, index) => (
                        <Checkbox
                          key={index}
                          label={checkbox.label}
                          checked={checkbox.checked}
                          onChange={() => handleCheckboxChange(index)}
                        />
                      ))}
                      <button onClick={addCheckbox}>Add Checkbox</button>
                    </div>
                  );
                };

export default Demoatt

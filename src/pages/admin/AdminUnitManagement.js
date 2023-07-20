import React, { useState } from 'react';

const AdminUnitManagement = ({ setUnitVisibility }) => {
  // State to track the visibility of each unit
  const [unit1Visible, setUnit1Visible] = useState(true);
  const [unit2Visible, setUnit2Visible] = useState(true);

  // Function to handle unit visibility changes and update the parent component (Rent)
  const handleUnitVisibilityChange = (unitNumber, isVisible) => {
    if (unitNumber === 1) {
      setUnit1Visible(isVisible);
      setUnitVisibility(1, isVisible);
    } else if (unitNumber === 2) {
      setUnit2Visible(isVisible);
      setUnitVisibility(2, isVisible);
    }
  };

  return (
    <div>
      <h2>Admin Page</h2>
      <div>
        <label>
          Unit 1:
          <input
            type="checkbox"
            checked={unit1Visible}
            onChange={(e) => handleUnitVisibilityChange(1, e.target.checked)}
          />
        </label>
      </div>
      <div>
        <label>
          Unit 2:
          <input
            type="checkbox"
            checked={unit2Visible}
            onChange={(e) => handleUnitVisibilityChange(2, e.target.checked)}
          />
        </label>
      </div>
      {/* Add more units if necessary */}
    </div>
  );
};

export default AdminUnitManagement;

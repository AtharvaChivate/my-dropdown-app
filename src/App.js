import React from 'react';
import DependentDropdown from './DependentDropdown'; // Import the component
import './App.css'; // We'll add some basic styling

function App() {
  // Define your data structure
  const locationData = {
    USA: {
      California: ['Los Angeles', 'San Francisco', 'San Jose'],
      Texas: ['Houston', 'Dallas', 'Austin'],
      Florida: ['Miami', 'Orlando', 'Tampa']
    },
    Canada: {
      Alberta: ['Calgary'],
      'British Columbia': ['Vancouver']
    },
    India: {
      Maharashtra: ['Pune', 'Mumbai'],
      'Madhya Pradesh': ['Indore'],
      Telangana: ['Hyderabad', 'Warangal']
    }
  };

  // Function to handle selection changes
  const handleSelectionChange = (selections) => {
    console.log('You selected:', selections);
    // You can see this in your browser's console (right-click > Inspect > Console)
  };

  return (
    <div className="App">
      <h1>My Location Selector</h1>
      <DependentDropdown
        data={locationData} // The nested data object
        levels={['country', 'state', 'city']} // The hierarchy levels
        labels={['Country', 'State', 'City']} // Display labels
        onSelectionChange={handleSelectionChange} // Callback for changes
        placeholder="Choose a" // Custom placeholder text
      />
    </div>
  );
}

export default App;
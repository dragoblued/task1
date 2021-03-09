import logo from './logo.svg';
import './App.css';
import Table from './components/Table.jsx';

function App() {
  const data = [
    {id: 1, name: 'Headphone  Fusion', value: 100},
    {id: 2, name: 'Headphone Beats', value: 80},
    {id: 3, name: 'Headphone Modus', value: 70},
    {id: 4, name: 'Headphone Jam', value: 100},
    {id: 5, name: 'Headphone Auto', value: 50},
    {id: 6, name: 'Headphone Byte', value: 70},
    {id: 7, name: 'Headphone Duo', value: 150},
    {id: 8, name: 'Headphone Modular', value: 80},
    {id: 9, name: 'Headphone Pivot', value: 150},
    {id: 10, name: 'Headphone Optimizer', value: 70},
    {id: 11, name: 'Headphone Rave', value: 50},
    {id: 12, name: 'Headphone Mach', value: 40},
    {id: 13, name: 'Headphone  Fusion', value: 100},
    {id: 14, name: 'Headphone Beats', value: 80},
    {id: 15, name: 'Headphone Auto', value: 50},
    {id: 16, name: 'Headphone Byte', value: 70},
    {id: 17, name: 'Headphone Duo', value: 150},
    {id: 18, name: 'Headphone Modular', value: 80},
    {id: 19, name: 'Headphone Pivot', value: 150},
    {id: 20, name: 'Headphone Optimizer', value: 70},
    {id: 21, name: 'Headphone Rave', value: 50},
    {id: 22, name: 'Headphone Mach', value: 40},
    {id: 23, name: 'Headphone Modus', value: 70},
    {id: 24, name: 'Headphone Jam', value: 100},
    {id: 25, name: 'Headphone Auto', value: 50},
    {id: 26, name: 'Headphone Byte', value: 70},
    {id: 27, name: 'Headphone Duo', value: 150},
    {id: 28, name: 'Headphone Modular', value: 80},
    {id: 29, name: 'Headphone Pivot', value: 150},
    {id: 30, name: 'Headphone Optimizer', value: 70},
    {id: 31, name: 'Headphone Rave', value: 50},
    {id: 32, name: 'Headphone Mach', value: 40},
    {id: 33, name: 'Headphone Modus', value: 70},
    {id: 34, name: 'Headphone Jam', value: 100},
    {id: 35, name: 'Headphone Auto', value: 50},
    {id: 36, name: 'Headphone Byte', value: 70},
    {id: 37, name: 'Headphone Duo', value: 150},
    {id: 38, name: 'Headphone Modular', value: 80},
    {id: 39, name: 'Headphone Pivot', value: 150},
    {id: 40, name: 'Headphone Optimizer', value: 70}, 
    {id: 41, name: 'Headphone  Fusion', value: 100},
    {id: 42, name: 'Headphone Beats', value: 80},
    {id: 43, name: 'Headphone Modus', value: 70},
    {id: 44, name: 'Headphone Jam', value: 100},
    {id: 45, name: 'Headphone Auto', value: 50},
    {id: 46, name: 'Headphone Byte', value: 70},
    {id: 47, name: 'Headphone Duo', value: 150},
    {id: 48, name: 'Headphone Modular', value: 80},
    {id: 49, name: 'Headphone Pivot', value: 150},,
    {id: 50, name: 'Headphone Optimizer', value: 70}, 
    {id: 51, name: 'Headphone  Fusion', value: 100},
    {id: 52, name: 'Headphone Beats', value: 80},
    {id: 53, name: 'Headphone Modus', value: 70},
    {id: 54, name: 'Headphone Jam', value: 100},
    {id: 55, name: 'Headphone Auto', value: 50},
    {id: 56, name: 'Headphone Byte', value: 70},
    {id: 57, name: 'Headphone Duo', value: 150},
    {id: 58, name: 'Headphone Modular', value: 80},
    {id: 59, name: 'Headphone Pivot', value: 150},
    
  ];
  return (
    <Table data={data}/>
  );
}

export default App;

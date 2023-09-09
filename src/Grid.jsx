import { range } from './utils';

const gridStyles = {
  width: '100px',
  height: '100px',
  border: 'solid grey',
  borderRadius: '5px',
};

function Grid({ numRows, numCols }) {
  return (
    <div style={{}} className="grid">
      {range(numRows).map((row) => (
        <div
          key={row}
          style={{ display: 'flex', gap: '4px', marginBottom: '4px' }}
        >
          {range(numCols).map((column) => (
            <div key={column} style={gridStyles}></div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Grid;

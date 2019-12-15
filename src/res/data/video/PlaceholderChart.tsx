import React from 'react';

// todo: remove this component when placeholder is no longer needed
export const PlaceholderChart: React.FC = () => {
  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '100%', backgroundColor: '#fff1'
    }}>
      <h4 style={{opacity: 0.4}}>Platzhalter</h4>
    </div>
  )
}

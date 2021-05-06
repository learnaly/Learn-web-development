import React, { useState, useEffect } from 'react';

function Cat(props) {
  const [pur, setPur] = useState(false);

  // First argument is a function to run
  // Second argument is list of simple values, if value is different in current render cycle, compared to previous re-render of this react component, first argument (function) will run
  // Sounds more complicated than it is :)
  useEffect(() => {
    console.log('Current pur state is: ', pur);
  }, [pur]);

  return (
    <div>
      <button
        onClick={() => setPur(!pur)}
      >
        Toggle pur
      </button>

      {pur && <div className='action'>Purrring</div>}
    </div>
  );
}

export default Cat;
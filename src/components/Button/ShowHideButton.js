import React from 'react';

import Button from '@material-ui/core/Button';

export function ShowHideButton({ buttonName,onButtonClick,disabledButton }) {

  return (
    <div data-test="showHidebuttons" style={{ margin: 10 }}>
      <Button data-test="buttonComponent" variant="contained" color="primary" onClick={()=>onButtonClick()} disabled={disabledButton}>
        {buttonName}
      </Button>
    </div>
  );
}


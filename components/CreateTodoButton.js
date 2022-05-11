import React from 'react';

function CreateTodoButton(props) {

  const onClickButton = () => {
    props.setOpenPortal(!props.openPortal);
  };
  
  return (
    <button
      onClick={onClickButton}
      className="CreateTodoButton"
    >
      +
    </button>
  );
}

export { CreateTodoButton };

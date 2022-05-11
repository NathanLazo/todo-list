import React from 'react';
import UI from '../components/UI';
import { TodoProvider } from '../components/TodoContext';


function Home() {


  return (
    <TodoProvider>
      <UI/>
    </TodoProvider>
  );
}

export default Home;



import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import {
  DndContext,
  closestCenter
} from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';
import { SortableItem } from './SortableItem';

const App = () => {
  const [languages, setLanguages] = useState(["English", "Malayalam", "Hindi"]);

  return (
    <>
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <div className=' flex mt-10 space-y-48'>
        <Container className='p-7 ' style={{ width: "50%" }} align="center" >
          <h2 className='text-center font-bold'>Languages</h2>
          <SortableContext
            items={languages}
            strategy={verticalListSortingStrategy}
          >
            {languages.map((language) => (
              <SortableItem key={language} id={language} />
            ))}
          </SortableContext>
        </Container>
        </div>
      </DndContext>
    </>
  );

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setLanguages((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);

        return arrayMove(items, activeIndex, overIndex);
      });
    }
  }
};

export default App;

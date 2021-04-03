import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import NoteCard from '../components/NoteCard';
import Masonry from 'react-masonry-css';

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/code08-ind/mockJson/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, []);

  const handleDelete = async (id) => {
    await fetch('https://my-json-server.typicode.com/code08-ind/mockJson/notes/' + id, {
      method: 'DELETE'
    })

    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
  }

  const breakPoints = {
    default: 3,
    1100: 2,
    700: 1
  }

  return (
    <Container>
      <Masonry
        breakpointCols={breakPoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {
          notes.map((note) => {
            return (
              <div item key={note.id}>
                <Paper>
                  <NoteCard note={note} handleDelete={handleDelete} />
                </Paper>
              </div>
            );
          })
        }
      </Masonry>
    </Container>
  );
}

export default Notes;
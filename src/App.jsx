import React, { useState } from 'react';
import { Nav, AddNote, CreateNote, Notes } from './components';
const App = () => {
    const [createNew, setCreateNew] = useState(false);
    const [Title, setTitle] = useState('');
    const [Note, setNote] = useState('');

    const [notes, setNotes] = useState([

   ]);

    const createNote = () => {
        console.log('note added');
        const newNote = { id: Date.now(), title: Title, note: Note };
        setNotes(prev => [...prev, newNote]);
    };
    return (
        <div className='w-100dvw bg-#ddd h-100dvh '>
            <Nav />
            <div className='w-full'>
                <CreateNote
                    isOpen={createNew}
                    onCancel={() => setCreateNew(false)}
                    setTitle={setTitle}
                    setNote={setNote}
                    onCreate={createNote}
                />
            </div>
            <div className='w-100vw'>
                <Notes notes={notes} />
            </div>

            <div
                className={`w-full fixed bottom-8 ${createNew ? 'hidden' : ''}`}
            >
                <AddNote onClick={() => setCreateNew(true)} />
            </div>
        </div>
    );
};

export default App;

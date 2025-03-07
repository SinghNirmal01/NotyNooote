import React from 'react';

const Notes = ({ notes }) => {
    return (
        <div className=' w-full flex flex-col items-center justify-center gap-4 my-4 bg-#ddd'>
            {notes &&
                notes.map((note, i) => (
                    <div
                        key={i}
                        className={`rounded-lg shadow-xl w-80% bg-white p-2 pt-1  m-a ${
                            i === notes.length - 1 ? 'mb-120px' : ''
                        }`}
                    >
                        <h1 className='text-lg p-1 rounded-xl text-center leading-1px'>
                            {note.title}
                        </h1>
                        <p className='bg-#ddd p-2 rounded'>{note.note}</p>
                    </div>
                ))}
        </div>
    );
};

export default Notes;

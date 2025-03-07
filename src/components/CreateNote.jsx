import React from 'react';
import { IoIosCreate } from 'react-icons/io';
import { FcCancel } from 'react-icons/fc';
const CreateNote = ({
    isOpen = true,
    onCancel,
    onCreate,
    setTitle,
    setNote
}) => {
    return (
        <div
            className={`w-full h-full  top-0 bg-#000/50 fixed ${
                !isOpen ? 'hidden' : ''
            }`}
        >
            <div
                border='2px double black'
                className='absolute w-80dvw h-80dvh bg-#dfe8e6 top-50% left-50% -translate-x-50% -translate-y-50% rounded-2xl p-4'
            >
                <div className='w-full flex flex-col justify-center items-center '>
                    <label className='p-2  rounded-t-3xl font-extrabold text-xl tracking-wide'></label>
                    <input
                        placeholder='Title'
                        className='shadow-2xl m-a text-xl p-2  text-center font-bold border-none rounded-full ring-2 focus:outline-none focus:ring-2 ring-#18c09c'
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className='w-full flex flex-col justify-center items-center my-4'>
                    <label className='p-2  rounded-t-3xl font-extrabold text-2xl tracking-wide'>
                        note
                    </label>
                    <textarea
                        onChange={e => setNote(e.target.value)}
                        className='shadow-2xl h-200px w-90% rounded p-4 text-xl  border-none '
                    />
                </div>
                <div className=' fixed left-0 w-full flex justify-center items-center bottom-4 '>
                    <button className='text-5xl w-full border-none bg-transparent active:scale-110 duration-150'>
                        <FcCancel
                            className='active:scale-110 duration-150'
                            onClick={() => { 
                              setTimeout(()=>{
                                setTitle('');
                                setNote('');
                                onCancel();
                              },150)
                                
                            }}
                        />
                    </button>

                    <button className='text-#20c3a0 text-5xl w-full bg-#000 border-none bg-transparent  '>
                        <IoIosCreate
                            className='active:scale-110 duration-150'
                            onClick={() => { 
                              setTimeout(()=>{setTitle('');
                                setNote('');
                                onCreate();
                                onCancel();
                                
                              },150)
                                
                            }}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateNote;

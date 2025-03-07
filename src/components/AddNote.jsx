import { FaPlus } from 'react-icons/fa';
import { IoMdAddCircle } from 'react-icons/io';
const AddNote = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className='m-a w-70px h-70px flex items-center justify-center bg-gray-200 rounded-50% border-0 duration-150 active:scale-110'
        >
            <IoMdAddCircle className='text-5xl' />
        </button>
    );
};

export default AddNote;

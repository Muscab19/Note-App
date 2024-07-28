import { useState } from "react";
import Note from './Note';

function Header() {
    const [isOpen, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <header className="bg-blue-500 text-white py-4 px-6 md:py-5 md:px-10 flex justify-between items-center shadow-md">
            <h1 className="text-3xl md:text-4xl font-bold">
                Just Note
            </h1>
            <button
                onClick={handleOpen}
                className="bg-white text-blue-500 font-semibold px-4 md:px-6 py-2 rounded-xl shadow-lg transition-transform transform hover:scale-105 focus:outline-none"
            >
                Add Note
            </button>
            {isOpen && <Note close={handleClose} />}
        </header>
    );
}

export default Header;

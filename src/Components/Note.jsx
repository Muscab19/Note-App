function Note ({ close }) {
    return (
        <div className="fixed inset-0 flex justify-center items-center z-50" style={{ backgroundColor: 'rgba(0, 0, 255, 0.5)' }}>
            <div className="bg-white w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto p-6 md:p-8 rounded-xl shadow-lg relative">
                <i onClick={close} className="fa-solid fa-xmark cursor-pointer absolute top-4 right-4 text-xl text-gray-700 hover:text-gray-500 transition-colors"></i>
                <h2 className="text-2xl font-bold mb-4">Add New Note</h2>
                <form>
                    <input
                        className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        type="text"
                        placeholder="Enter title"
                    />
                    <textarea
                        className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        rows={8}
                        placeholder="Write your note here"
                    ></textarea>
                    <button
                        type="button"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 mt-2 rounded-lg text-lg font-semibold transition-colors"
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Note;

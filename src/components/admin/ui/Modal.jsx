// eslint-disable-next-line react/prop-types
export default function Modal({ children, onClose }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-96">
                {children}
                <button onClick={onClose} className="mt-4 w-full bg-red-500 text-white py-2 rounded">
                    Close
                </button>
            </div>
        </div>
    );
}

import { useState } from "react";

const Modal = ({ data, label }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <button
                onClick={openModal}
                className="btn-primary-lite"
            >
                {label}
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
                        <p className="mb-4">Do you accept the terms?
                            {data.id}
                        </p>
                        <div className="flex items-center space-x-2 border-t border-gray-200 rounded-b">
                            <button
                                data-modal-hide={data.id}
                                type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                onClick={closeModal}
                            >
                                I accept
                            </button>
                            <button
                                data-modal-hide={data.id}
                                type="button"
                                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900"
                                onClick={closeModal}
                            >
                                Decline
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;

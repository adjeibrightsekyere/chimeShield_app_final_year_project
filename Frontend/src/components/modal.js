function Modal ({ show, onClose, title, children}) {
    if(!show){
        return null;
    }
    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg w-1/2">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl">{title}</h2>
                    <button className="text-xl font-bold" onClick={onClose}>X</button>
                </div>
                <div className="mt-4">
                    {children}
                </div>


            </div>
        </div>
    )
}
export default Modal;
import { toast } from 'react-toastify';

const ToastMessage = ({ type, message }) => {
    if (type === 'success') {
        toast.success(message);
    } else {
        toast.error(message);
    }
};

export default ToastMessage;


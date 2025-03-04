import { toast,ToastContent } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CiCircleCheck } from "react-icons/ci";
import './useToast.css';

const useToast = () => {
  const showToast = (content: ToastContent, type: 'success' | 'error' | 'info' | 'warning' = 'success') => {
    switch (type) {
      case 'success':
        toast.success(content,{
          icon: <CiCircleCheck className="react-icons"/> 
        });
        break;
      case 'error':
        toast.error(content);
        break;
      case 'info':
        toast.info(content);
        break;
      case 'warning':
        toast.warning(content);
        break;
      default:
        toast(content);
    }
  };

  return showToast;
};

export default useToast;

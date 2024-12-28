import { useState } from "react";

const useToast = () => {
  const [toast, setToast] = useState({ visible: false, message: "" });

  const showToast = (message) => {
    setToast({ visible: true, message });

    setTimeout(() => {
      setToast({ visible: false, message: "" });
    }, 13000);
  };

  return { toast, showToast };
};

export default useToast;

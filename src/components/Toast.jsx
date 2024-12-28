import { useState } from "react";

const useToast = () => {
  const [toast, setToast] = useState({ visible: false, message: "" });

  const showToast = (message) => {
    console.log("Toast Triggered:", message); 
    setToast({ visible: true, message });

    setTimeout(() => {
      setToast({ visible: false, message: "" });
    }, 3000);
  };

  return { toast, showToast };
};

export default useToast;

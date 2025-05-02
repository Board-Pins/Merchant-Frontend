// utils/helpers/copyToClipboard.js
import toast from "react-hot-toast";

export const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(
    () => {
      toast.success("Text copied to clipboard");
    },
    (err) => {
      toast.error("Could not copy text: " + err);
    }
  );
};

import React, { useEffect, useState } from "react";
import Modal from "../../atoms/commonatoms/Modal";
import TaskModalForm from "../../myboard/TaskModalForm";
import * as Yup from "yup";
import { useFormik } from "formik";
import "../../atoms/atomsEditor/Global.css"; // Make sure to import your styles
import useTiptapEditor from "../../atoms/atomsEditor/useTiptapEditor";
import NewTaskSidebar from "./NewTaskSidebar";

const NewTaskModal = ({ isOpen, onClose }) => {
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const editor = useTiptapEditor();

  useEffect(() => {
    editor?.commands?.setContent(JSON.parse(localStorage.getItem("tiptap")));
  }, [editor]);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "", 
      subtask: false,
      dueDate: "",
      doDate: "",
      photo: null,
      link: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      dueDate: Yup.string().required("Due date is required"),
      doDate: Yup.string().required("Due time is required"),
    }),
    onSubmit: (values) => {
      values.description = editor.getText(); // Add the editor content to the form values
      values.priority = priority; // Add the priority to the form values
      console.log("Form data:", values);
      // You can add additional logic to handle the form submission
    },
  });

  const handleLinkClick = () => {
    const link = prompt("Please enter the link:");
    if (link) {
      formik.setFieldValue("link", link);
    }
  };

  const handlePhotoClick = () => {
    document.getElementById("photo-upload").click();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="New Task">
      <div className="mt-4">
        <div className=" grid lg:grid-cols-3 grid-cols-1">
          <div className=" col-span-2 px-5">
            <TaskModalForm
              formik={formik}
              editor={editor}
              description={description}
              setDescription={setDescription}
              priority={priority}
              setPriority={setPriority}
              handleLinkClick={handleLinkClick}
              handlePhotoClick={handlePhotoClick}
            />
          </div>
          <div className=" flex lg:ps-12">
            <NewTaskSidebar />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default NewTaskModal;

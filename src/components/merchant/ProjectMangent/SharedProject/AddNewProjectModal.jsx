import React from "react";
import Modal from "../../atoms/commonatoms/Modal";
import ProjectForm from "./ProjectForm";

function AddNewProjectModal({ isOpen, onClose }) {
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} >
        <div className="flex w-full justify-center items-center lg:min-w-[750px]">
          <div className="">
            <h2 className="text-[#333333] lg:text-5xl text-3xl font-bold pt-12 text-center">
              Create a new project
            </h2>
            <ProjectForm onClose={onClose} />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default AddNewProjectModal;

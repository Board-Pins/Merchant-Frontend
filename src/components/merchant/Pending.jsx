import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearUser } from "../../redux/features/userSliceDate";
import correct from "../../assets/icons/correct.png";
import { toast } from "react-toastify";
import ConfirmDialog from "./atoms/commonatoms/ConfirmDialog";
import Modal from "./atoms/commonatoms/Modal";
import { useLogoutMutation } from "../../services/userApi";



export const PendingModal = ({ isOpen, handleIsclose }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showConfirmLogout, setShowConfirmLogout] = useState(false);
  const [logout] = useLogoutMutation();

  const handleLogout = () => {
    // Show confirmation dialog
    setShowConfirmLogout(true);
  };

  const confirmLogout = () => {
    // logout user from the application with API call
    logout()
      .unwrap()
      .then((response) => {
        // Reset authentication state in Redux
        dispatch(clearUser());
        // Close modals
        setShowConfirmLogout(false);
        handleIsclose();

        // Redirect to home page
        navigate('/home', { replace: true });

        toast.info(t('profile.rejection.loggedOut', 'You have been logged out'));
        console.log("Logout successful:", response);
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        className="flex flex-col justify-center items-center overflow-hidden rounded-3xl bg-white"
      >
        <div className="h-full text-[#333333] font-poppins p-4 md:p-6">
          <div className="flex flex-col items-center justify-center py-6">
            {/* Green circle with checkmark */}
            <div className="w-50 h-50 md:w-52 md:h-52 mb-4 flex items-center justify-center">
              <img
                src={correct}
                alt="Success checkmark"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Heading */}
            <h1 className="text-xl md:text-5xl font-bold text-center mb-3 text-green-600">
              {t('profile.pending.title', 'Pending Approval!')}
            </h1>

            {/* Description */}
            <p className="text-center text-gray-600 max-w-md mb-6">
              {t('profile.pending.description', 'Your profile has been submitted and is currently under review. This process typically takes 1-2 business days.')}
            </p>

            {/* What happens next */}
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg p-5 mb-6 w-full">
              <h3 className="font-semibold mb-2 text-blue-700">
                {t('profile.pending.whatNext', 'What happens next?')}
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>{t('profile.pending.step1', 'Our team will review your profile information')}</li>
                <li>{t('profile.pending.step2', 'You\'ll receive an email notification once approved')}</li>
                <li>{t('profile.pending.step3', 'After approval, you\'ll have full access to the platform')}</li>
              </ul>
            </div>
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <button
                onClick={handleLogout}
                className="flex-1 bg-indigo-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {t('profile.rejection.later', 'Logout')}
              </button>
            </div>
          </div>
        </div>
      </Modal>
      {/* Confirmation Dialog for Logout */}
      <ConfirmDialog
        isOpen={showConfirmLogout}
        title={t('profile.rejection.logout', 'Are you sure you want to logout?')}
        message={t('profile.rejection.logoutMessage', 'If you log out now, you will need to update your profile later. Are you sure you want to log out?')}
        confirmText={t('profile.rejection.confirmYes', 'Yes, Log Out')}
        cancelText={t('profile.rejection.confirmNo', 'No, Stay Logged In')}
        onConfirm={confirmLogout}
        onCancel={() => setShowConfirmLogout(false)}
      />
    </>
  );
};

export default PendingModal;

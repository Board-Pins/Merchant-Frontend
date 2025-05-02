export const InfoItem = ({ icon, title, subtitle }) => (
    <div className="flex gap-1 items-center">
      {icon}
      <div>
        <h3 className=" font-semibold text-sm text-dark">{title}</h3>
        <p className="text-gray-400 text-xs">{subtitle}</p>
      </div>
    </div>
  );
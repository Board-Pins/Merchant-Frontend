import { IconButton } from "./IconButton";
import iconEdit from "../../../../assets/icons/pepicons-pop_expand.png";
import iconSetting from "../../../../assets/icons/Group (1).png";
import { GrGroup } from "react-icons/gr";
export const Header = () => (
    <header className="py-5 flex items-center gap-2 relative">
      <div className="p-3 bg-gray-300 rounded-xl">
        <GrGroup size={22} />
      </div>
      <div className="mt-3 md:mt-0">
        <h3 className="font-medium text-2xl">Production Groups</h3>
      </div>
      <div className="flex md:absolute right-0 mt-3 md:mt-0">
        <IconButton src={iconEdit} alt="Edit Icon" />
        <IconButton src={iconSetting} alt="Setting Icon" className="ml-2" />
      </div>
    </header>
  );
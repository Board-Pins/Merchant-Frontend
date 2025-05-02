import setting_icon from "../../../assets/icons/SettingIconify.png"
function HeaderSetting({subtitle}) {
  return (
    <div>
    <div className=" flex gap-2 py-3 items-center">
    <img src={setting_icon} className=" w-[35px] rounded-xl bg-[#E5E5FF] p-2"/>
    <h2 className="text-[#292D32] font-bold text-2xl">Settings <span className=" text-gray-200 font-normal">({subtitle})</span></h2>
    
    </div>
    </div>
  )
}

export default HeaderSetting
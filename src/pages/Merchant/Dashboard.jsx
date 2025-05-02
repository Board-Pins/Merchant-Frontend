import AnalyticsDashboard from "../../components/provider/Dashboard/AnalyticsDashboard"
import HeaderDashboard from "../../components/provider/Dashboard/HeaderDashboard"

function Dashboard() {
  return (
    <div className=" bg-white rounded-xl p-4 font-poppins">
    
    <HeaderDashboard/>
    <main className=" py-4">
    <AnalyticsDashboard/>
    
    </main>
    
    </div>
  )
}

export default Dashboard
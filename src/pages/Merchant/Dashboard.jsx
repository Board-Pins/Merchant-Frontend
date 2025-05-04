import AnalyticsDashboard from "../../components/merchant/Dashboard/AnalyticsDashboard"
import HeaderDashboard from "../../components/merchant/Dashboard/HeaderDashboard"

function Dashboard() {
  return (
    <div className=" bg-white rounded-xl p-4 font-poppins">

      <HeaderDashboard />
      <main className=" py-4">
        <AnalyticsDashboard />

      </main>

    </div>
  )
}

export default Dashboard
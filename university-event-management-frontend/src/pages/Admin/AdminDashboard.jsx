import Dashboard from "../../components/common/Dashboard/Dashboard";
import PageCom from "../../components/common/PageCom/PageCom";
import styles from "./AdminDashboard.module.css";

const AdminDashboard = () => {
  // const data = [
  //   {
  //     title: "Admin Dashboard of University of Karachi",
  //     navigate: [
  //       {
  //         linkText: "Dashboard",
  //         linkUrl: "/karachi-university-admin-dashboard",
  //       },
  //       {
  //         linkText: "Admissions Management System",
  //         linkUrl: "#events-announce",
  //       },
  //       {
  //         linkText: "Faculties Management System",
  //         linkUrl: "#events-announce",
  //       },
  //       {
  //         linkText: "Examination Management System",
  //         linkUrl: "#events-announce",
  //       },
  //       {
  //         linkText: "Events Management System",
  //         linkUrl: "#events-announce",
  //       },
  //       {
  //         linkText: "Alumni Management System",
  //         linkUrl: "#events-announce",
  //       },
  //     ],
  //   },
  // ];
  return (
    <div className={styles.ema}>
      <Dashboard title={"Welcome back to the Admin Dashboard"}>
        <PageCom title={"Dr. Prof. Abdul Latif Khatri"}>Hello Admin</PageCom>
      </Dashboard>
    </div>
  );
};

export default AdminDashboard;

import PageCom from "../../components/common/PageCom/PageCom";
import styles from "./Dashboard.module.css";

const AdminDashboard = () => {
  const data = [
    {
      title: "Admin Dashboard of University of Karachi",
      navigate: [
        {
          linkText: "Dashboard",
          linkUrl: "/karachi-university-admin-dashboard",
        },
        {
          linkText: "Admissions Management System",
          linkUrl: "#events-announce",
        },
        {
          linkText: "Faculties Management System",
          linkUrl: "#events-announce",
        },
        {
          linkText: "Examination Management System",
          linkUrl: "#events-announce",
        },
        {
          linkText: "Events Management System",
          linkUrl: "#events-announce",
        },
        {
          linkText: "Alumni Management System",
          linkUrl: "#events-announce",
        },
      ],
    },
  ];
  return (
    <div className={styles.ema}>
      <div className={styles.emb}>
        <PageCom data={data} />
      </div>
    </div>
  );
};

export default AdminDashboard;

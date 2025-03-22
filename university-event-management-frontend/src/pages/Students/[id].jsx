import Dashboard from "../../components/common/Dashboard/Dashboard";
import PageCom from "../../components/common/PageCom/PageCom";
import BioCom from "../../components/common/BioCom/BioCom";
import { useEffect, useState } from "react";
import styles from "./Students.module.css";
import ErrorPage from "../Error/ErrorPage";
import { useParams } from "react-router";
import { getReq } from "../../api/axios";

const StudentDashboard = () => {
  const { id } = useParams();
  const [ Student, setStudent ] = useState([]);

  const data = {
    name: 'Usama Israr Khan',
    imgUrl: 'example.png',
    imgAlt: 'Usama Image'
  }

  useEffect(() => {
    const getAllStudents = async () => {
      try {
        const getStudents = await getReq("/students");
        const students = getStudents.data.data.filter((item) => item._id === id )
        const [student] = students;
        setStudent(student)
      } catch (error) {
        console.log(error);
      }
    };

    getAllStudents();
  }, []);

  console.log(Student);
  

  return (
    <div className={styles.ema}>
      {
        Student === undefined ? <ErrorPage /> :
      
      <Dashboard title={"Student Dashboard"}>
        <PageCom title={`Mr / Mrs ${Student.studentName}`}>
          <div className={styles.emb}>
            <div className={styles.emc}>
              <aside>
                <h3>Dashboard</h3>
              </aside>
            </div>

            <div className={styles.emd}>
              <div>
                <BioCom data={data} />
              </div>
            </div>
          </div>
        </PageCom>
      </Dashboard>
      }
    </div>
  );
};

export default StudentDashboard;

import { useEffect, useState } from "react";
import { getReq } from "../../api/axios";
import PageConCom from "../../components/common/PageConCom/PageConCom";
import PageLayCom from "../../components/common/PageLayCom/PageLayCom";
import styles from "./Login.module.css";
import { useNavigate } from "react-router";

const Login = () => {
  const titles = {
    imgTitle: "Karachi University Student Portal",
    pageTitle: "Login Page",
  };

  const userData = {
    studentEmail: "",
    seatNo: "",
  };

  const [userInput, setUserInput] = useState(userData);
  const [students, setStudents] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
};

// console.log(students);


  const handleSubmit = (e) => {
    e.preventDefault();
    const user = students.filter(
      (item) => item.studentEmail == userInput.studentEmail
    );
    console.log(user);
    
    if (user.length === 0 ) {
      setIsCorrect(false);
      navigate('/')
    } else {
      setIsCorrect(true);
    }

    if(user[0].role === 'Admin') {
      navigate('/admin-usama');
    }
    else if(user[0].role === 'Event Manager') {
      navigate('/event-manager');
    }
    else if(user.length === 1) {
      navigate('/');
    }
  };

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await getReq("/students", userInput);
        setStudents(response.data.data);
      } catch (error) {
        console.error("Error For Login:", error);
      }
    };
    fetchStudentData();
  }, []);

  return (
    <div>
      <PageLayCom titles={titles}>
        <PageConCom>
          <div>
            <div className={styles.elf}>
              <h3>Login to access your account</h3>
              <div>
                <form>
                  <label htmlFor="studentEmail">
                    Email :{" "}
                    <input
                      type="email"
                      name="studentEmail"
                      id="studentEmail"
                      placeholder="johndoe@gmail.com"
                      required
                      value={userInput.studentEmail}
                      onChange={handleChange}
                    />
                  </label>
                  <br />
                  <br />
                  <label htmlFor="seatNo">
                    Seat No :{" "}
                    <input
                      type="text"
                      name="seatNo"
                      id="seatNo"
                      placeholder="20101010"
                      min={8}
                      required
                      value={userInput.seatNo}
                      onChange={handleChange}
                    />
                  </label>
                  <br />
                  <p className={`${isCorrect ? styles.db : styles.dn}`}>
                    Please enter a correct email address or seat number.
                  </p>
                  <div className={styles.elg}>
                    <button
                      type="button"
                      className={styles.elh}
                      onClick={handleSubmit}
                    >
                      Login
                    </button>
                  </div>
                  <p>
                    Don&apos;t have an account, Please{" "}
                    <a href="/sign-up">Sign up</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </PageConCom>
      </PageLayCom>
    </div>
  );
};

export default Login;

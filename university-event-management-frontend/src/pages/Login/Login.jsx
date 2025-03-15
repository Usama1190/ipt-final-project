import PageLayCom from "../../components/common/PageLayCom/PageLayCom";
import PageConCom from "../../components/common/PageConCom/PageConCom";
import ButtonCom from "../../components/common/ButtonCom/ButtonCom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getReq } from "../../api/axios";
import styles from "./Login.module.css";

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
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = students.filter(
      (item) => item.studentEmail == userInput.studentEmail
    );

    const [user] = users;
    console.log(user);

    if (!user) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }

    if (user.role === "Admin") {
      navigate("/admin-usama");
    } else if (user.role === "Event Manager") {
      navigate("/event-manager");
    } else if (user) {
      navigate(`/students/${user._id}`);
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
                    Email address :{" "}
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
                  <label htmlFor="seatNo">
                    Seat number :{" "}
                    <input
                      type="text"
                      name="seatNo"
                      id="seatNo"
                      placeholder="20101010"
                      maxLength={8}
                      required
                      value={userInput.seatNo}
                      onChange={handleChange}
                    />
                  </label>
                  <p className={`${isCorrect ? styles.db : styles.dn}`}>
                    Invalid email address or user does not exist.
                  </p>
                  <div className={styles.elg}>
                    <ButtonCom
                      btnLayout={"btn3"}
                      btnText={"Login"}
                      callFun={handleSubmit}
                    />
                  </div>
                  <p>
                    Don&apos;t have an account, Please::
                    <a href="/account/sign-up">Sign up</a>
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

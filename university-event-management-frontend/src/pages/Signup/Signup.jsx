import { useState } from "react";
import PageConCom from "../../components/common/PageConCom/PageConCom";
import PageLayCom from "../../components/common/PageLayCom/PageLayCom";
import { postReq } from "../../api/axios";
import styles from "./Signup.module.css";
import { departNames } from "../../utils/constant/departNames";
import ButtonCom from "../../components/common/ButtonCom/ButtonCom";
import { useNavigate } from "react-router";
import MessCom from "../../components/common/MessCom/MessCom";

const Signup = () => {
  const [btnDisable, setBtnDisabled] = useState(true);
  const [isWarning, setIsWarning] = useState(false);
  const navigate = useNavigate();

  const titles = {
    imgTitle: "Karachi University Student Portal",
    pageTitle: "Account Page",
  };

  const userData = {
    studentName: "",
    fatherName: "",
    gender: "",
    studentEmail: "",
    departName: "",
    seatNo: "",
    shift: "",
  };

  const [userInput, setUserInput] = useState(userData);

  const {departName, fatherName, gender, studentEmail, studentName, seatNo } = userInput;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (
      departName.length > 2 &&
      fatherName.length > 2 &&
      gender.length > 3 &&
      studentEmail.length > 5 &&
      studentName.length > 2 &&
      seatNo.length > 7
    ) {
      setBtnDisabled(false);
    }
    else {
      setBtnDisabled(true);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await postReq("/students/create-student", userInput);
      navigate(`/students/${response.data.data._id}`);
      console.log(response);
      setIsWarning(false);
      alert("Signup Successfully!");
    } catch (error) {
      setIsWarning(true);
      console.error("Error For Signup:", error);
    }
  };

  return (
    <div>
      <PageLayCom titles={titles}>
        <PageConCom>
          <div>
            <div className={styles.elf}>
              <h3>Create Account</h3>
              <div className={`${isWarning ? 'db' : 'dn'}`}>
                <MessCom message={'Network issue or server connection error. Please try again later.'} />
              </div>
              <div>
                <form>
                  <label htmlFor="studentName">
                    Name :{" "}
                    <input
                      type="text"
                      name="studentName"
                      id="studentName"
                      placeholder="John"
                      required
                      value={userInput.studentName}
                      onChange={handleChange}
                    />
                  </label>
                  <label htmlFor="fatherName">
                    Father Name :{" "}
                    <input
                      type="text"
                      name="fatherName"
                      id="fatherName"
                      placeholder="Deo"
                      required
                      value={userInput.fatherName}
                      onChange={handleChange}
                    />
                  </label>
                  <br />
                  <br />
                  Gender :{" "}
                  <label htmlFor="male">
                    <input
                      type="radio"
                      name="gender"
                      id="male"
                      value="Male"
                      checked={userInput.gender === "Male"}
                      onChange={handleChange}
                    />{" "}
                    Male
                  </label>
                  <label htmlFor="female">
                    <input
                      type="radio"
                      name="gender"
                      id="female"
                      value="Female"
                      checked={userInput.gender === "Female"}
                      onChange={handleChange}
                    />{" "}
                    Female
                  </label>
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
                  <label htmlFor="departName">
                    Department Name :{" "}
                    <select
                      name="departName"
                      id="departName"
                      required
                      value={userInput.departName}
                      onChange={handleChange}
                    >
                      <option value="">Select Department</option>
                      {departNames.map((item, index) => {
                        return <option key={index}>{item}</option>;
                      })}
                    </select>
                  </label>
                  <br />
                  <br />
                  <label htmlFor="seatNo">
                    Seat No :{" "}
                    <input
                      type="text"
                      name="seatNo"
                      id="seatNo"
                      placeholder="25100101 - 25100130"
                      maxLength={8}
                      required
                      value={userInput.seatNo}
                      onChange={handleChange}
                    />
                  </label>
                  Shift :{" "}
                  <label htmlFor="morning">
                    <input
                      type="radio"
                      name="shift"
                      id="morning"
                      value="Morning"
                      checked={userInput.shift === "Morning"}
                      onChange={handleChange}
                    />{" "}
                    Morning
                  </label>
                  <label htmlFor="evening">
                    <input
                      type="radio"
                      name="shift"
                      id="evening"
                      value="Evening"
                      checked={userInput.shift === "Evening"}
                      onChange={handleChange}
                    />{" "}
                    Evening
                  </label>
                  <div className={styles.elg}>
                    <ButtonCom
                      btnText={"Sign up"}
                      btnLayout={"btn3"}
                      callFun={handleSubmit}
                      disabled={btnDisable}
                    />
                  </div>
                  <p>
                    Already have an account, Please::
                    <a href="/account/login">Login</a>
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

export default Signup;

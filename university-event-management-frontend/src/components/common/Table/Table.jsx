import ButtonCom from "../ButtonCom/ButtonCom";
import { delReq } from "../../../api/axios";
import { useState } from "react";

const Table = ({ headData, rowData, fetchEvent, fetchEventApps }) => {
  const [isloading, setIsLoading] = useState(false);

  const deleteEventPost = async (id) => {
    setIsLoading(true);
    try {
      const responce = await delReq(`/events/delete-event/${id}`);
      setIsLoading(false);
      console.log(rowData);
      
      fetchEvent();
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const deleteStudent = async (id) => {
    setIsLoading(true);
    try {
      const responce = await delReq(`/students/delete-student/${id}`);
      setIsLoading(false);
            
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <div>
      {rowData?.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>#</th>
              {headData &&
                Object.keys(headData).map((key) => (
                  <th key={key}>{headData[key]}</th>
                ))}
              <th colSpan={2}>N/A</th>
            </tr>
          </thead>
          <tbody>
            {rowData.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                {headData &&
                  Object.keys(headData).map((key) => (
                    <td key={key}>{item[key]}</td>
                  ))}
                {item?.eName || item?.studentName ? (
                  <>
                    <td>
                      <ButtonCom btnText={"Edit"} btnLayout={"btn4"} />
                    </td>
                    <td>
                      <ButtonCom
                        btnText={"Delete"}
                        btnLayout={"btn"}
                        callFun={item?.eName ? () => deleteEventPost(item._id) : () => deleteStudent(item._id)}
                      />
                    </td>
                  </>
                ) : (
                  <>
                    <td>
                      <ButtonCom
                        btnText={"Approved"}
                        btnLayout={"btn4"}
                        callFun={() => deleteEventPost(item._id)}
                      />
                    </td>
                    <td>
                      <ButtonCom
                        btnText={"Reject"}
                        btnLayout={"btn"}
                        callFun={() => deleteEventPost(item._id)}
                      />
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Data Not Found!</p>
      )}
    </div>
  );
};

export default Table;

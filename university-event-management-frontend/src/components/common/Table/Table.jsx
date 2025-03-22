import { delReq } from "../../../api/axios";
import ButtonCom from "../ButtonCom/ButtonCom";

const Table = ({ headData, rowData, fetchEvent, fetchEventApps }) => {
  const deleteEventPost = async (id) => {
    try {
      const responce = await delReq(`/events/delete-event/${id}`);
      fetchEvent();
    } catch (error) {
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
                {item?.eName ? (
                  <>
                    <td>
                      <ButtonCom btnText={"Edit"} btnLayout={"btn4"} />
                    </td>
                    <td>
                      <ButtonCom
                        btnText={"Delete"}
                        btnLayout={"btn"}
                        callFun={() => deleteEventPost(item._id)}
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

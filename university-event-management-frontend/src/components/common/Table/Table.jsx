const Table = ({ headData, rowData }) => {
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

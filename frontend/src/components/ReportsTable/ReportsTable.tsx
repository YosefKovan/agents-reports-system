import { type FC } from "react";
import { type Report } from "../../interfaces/report.interfaces";
import "./ReportsTable.css"

const ReportsTable: FC<{ reports: Report[] }> = ({ reports }) => {
  
  return (
    <table>
      <thead>
        <tr>
          <th>category</th>
          <th>urgency</th>
          <th>userId</th>
          <th>createdAt</th>
          <th>message</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {reports &&
          reports.map((report: Report) => (
            <tr key={report.id}>
              <td>{report.category}</td>
              <td>{report.urgency}</td>
              <td>{report.userId}</td>
              <td>{new Date(report.createdAt).toDateString()}</td>
              <td>{report.message}</td>
              <td>
                {report.filePath ? (
                  <img
                    className="table-img"
                    src={"http://localhost:3000/" + report.filePath}
                  />
                ) : (
                  "---"
                )}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default ReportsTable;

import React from "react";
import { Table,PageHeader } from "antd";
import teams from "../../../fetch/teams.json";

export default function Teams() {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Experience",
      dataIndex: "experience",
      key: "experience",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Expertise",
      dataIndex: "expertise",
      key: "expertise",
    }
  ];
  return (
    <div>
      
      {/* <table>
        <tr>
          <td>
            <tr>
              <th>Name</th>
              <th>Experience</th>
              <th>Location</th>
              <th>Expertise</th>
            </tr>
            {teams.map((team, key) => {
              return (
                <tr>
                  <td>{key + 1}</td>
                  <td>{team.name}</td>
                  <td>{team.experience}</td>
                  <td>{team.location}</td>
                  <td>{team.expertise}</td>
                </tr>
              );
            })}
          </td>
        </tr>
      </table> */}
      <PageHeader
        className="site-page-header"
        title="Select Team for your Event:"
      />
      <Table
        dataSource={teams}
        columns={columns}
        rowClassName={record => !record.enabled && "disabled-row"}
      />
      {/* <Table
        // className="table-layout"
        columns={columns}
        dataSource={teams}
        rowClassName={(record) =>
          record.IsDefaultAccount ? "data-row active-row" : "data-row"
        }
        bordered={true}
        size={"small"}
        // onRowDoubleClick={(record, index, event) =>
        //   this.handleEditModal(record)
        // }
        onRowClick={(record, index, event) => this.handleRowClick(record)}
        // loading={this.state.loading}
        pagination={{ pageSize: 14 }}
      /> */}
    </div>
  );
}

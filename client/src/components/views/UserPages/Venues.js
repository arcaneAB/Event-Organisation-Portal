import React from "react";
import { Table } from "antd";
import { PageHeader } from "antd";
import venues from "../../../fetch/venues.json";

export default function Venues() {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Scale",
      dataIndex: "scale",
      key: "scale",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Usage",
      dataIndex: "usage",
      key: "usage",
    },
  ];
  return (
    <div>
      {/* <table>
        <tr>
          <td>
            <tr>
              <th>Name</th>
              <th>Scale</th>
              <th>Location</th>
              <th>Usage</th>
            </tr>
            {venues.map((venue, key) => {
              return (
                <tr>
                  <td>{key + 1}</td>
                  <td>{venue.name}</td>
                  <td>{venue.scale}</td>
                  <td>{venue.location}</td>
                  <td>{venue.usage}</td>
                </tr>
              );
            })}
          </td>
        </tr>
      </table> */}
      <PageHeader
        className="site-page-header"
        title="Select Venue for your Event:"
      />
      <Table dataSource={venues} columns={columns} />;
    </div>
  );
}

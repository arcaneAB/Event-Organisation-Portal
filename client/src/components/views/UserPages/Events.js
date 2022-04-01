import React from "react";
import { Row, Col, Card } from "antd";

export default function Events() {
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={8}>
          <Card title="My event team" bordered={false}>
            <Card
              title="Selected Team"
              extra={<a href="/teams">All teams</a>}
              style={{ width: 300 }}
            >
              <p>Name: Panorama Events</p>
              <p>Experience: 10 years</p>
              <p>Location: Madhya Pradesh</p>
              <p>Expertise: Corporate</p>
            </Card>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="My event venue" bordered={false}>
            <Card
              title="Selected Venue"
              extra={<a href="/venues">All venues</a>}
              style={{ width: 300 }}
            >
              <p>Name: Brilliant Convention Center</p>
              <p>Scale: 100-250</p>
              <p>Location: Vijay Nagar</p>
              <p>Usage: Corporate</p>
            </Card>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

import { Button, Row, Col } from "antd";

function Navbar() {
  return (
    <div>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        style={{ textAlign: "center" }}
      >
        <Col className="gutter-row" span={12}>
          <Button type="link">
            <Link exact to="/">
              Home
            </Link>
          </Button>
        </Col>
        <Col className="gutter-row" span={12}>
          <Button type="link">
            <Link to="/add">Create User</Link>
          </Button>
        </Col>
      </Row>
    </div>
  );
}
export default Navbar;

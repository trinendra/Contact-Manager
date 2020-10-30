import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import { Layout } from "antd";
import Title from "antd/lib/typography/Title";
import Navbar from "./components/Navbar";
import AddForm from "./components/AddForm";
import ContactList from "./components/ContactList";
import Update from "./components/Update";
//import { Router } from "react-router-dom/cjs/react-router-dom.min";
const { Header, Content } = Layout;

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Header style={{ text: "white" }}>
            <Title level={3} style={{ color: "white" }}>
              Contact Book
            </Title>
          </Header>

          <Content style={{ overflow: "scroll" }}>
            <Navbar />

            <Switch>
              <Route path="/add">
                <Add />
              </Route>
              <Route path="/:id">
                <UpdateFcn />
              </Route>
              <Route exact path="/">
                <Contacts />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Router>
    </div>
  );
  function Add() {
    return (
      <Content>
        <AddForm />
      </Content>
    );
  }

  function Contacts() {
    return (
      <Content>
        <ContactList />
      </Content>
    );
  }
  function UpdateFcn() {
    return (
      <Content>
        <Update />
      </Content>
    );
  }
}

export default App;

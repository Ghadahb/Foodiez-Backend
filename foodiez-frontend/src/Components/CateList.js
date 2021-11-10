import React from "react";
import CateItem from "./CateItem";
import cateStores from "../Stores/cateStores";
import { observer } from "mobx-react";
import { useState } from "react";
import cateStore from "../Stores/cateStores";
import CategoryModal from "./CategoryModal";
import CateDetail from "./CateDetail"
import { Form, Row, Stack } from "react-bootstrap";


function CateList() {
  const [query, setQuery] = useState("");

  const cateList = cateStores.categories
  // .filter((category) => category.name.toLowerCase().includes(query.toLowerCase()))
  .map((category) => <CateDetail key={category._id} category={category} />);

  return (
      <div>
          <h1> Food Categories </h1>
        <Stack direction="horizontal" gap={3}>
        <Form.Control
          className="m-2"
          placeholder="Search for category"
          onChange={(event) => setQuery(event.target.value)}
        />
        <CategoryModal />
        </Stack>
        <Row> {cateList}</Row>
      </div>
  );
}

export default observer(CateList);

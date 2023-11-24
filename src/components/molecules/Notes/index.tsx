import { Button, Col, Row, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import styled from "styled-components";
import { getCurrentDateTime } from "../../../utils/dateUtils";
import { marked } from "marked";

const SSpace = styled(Space)`
  width: 100%;
`;

const Notes: React.FC = () => {
  const [value, setValue] = useState(localStorage.getItem("notes") || "");
  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setValue(e.target.value);
    localStorage.setItem("notes", e.target.value);
  };

  const handleDelete = () => {
    setValue("");
    localStorage.removeItem("notes");
  };

  const downloadNotes = () => {
    const element = document.createElement("a");
    const file = new Blob([value], { type: "text/plain" });
    const fileName = "note_" + getCurrentDateTime() + ".txt";
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  const createMarkup = () => {
    return { __html: marked(value) };
  };

  return (
    <SSpace direction="vertical" size="small">
      <Row gutter={16}>
        <Col span={12}>
          <TextArea
            onChange={handleChange}
            value={value}
            placeholder="Enter your notes here..."
            autoSize={{ minRows: 25, maxRows: 25 }}
          />
        </Col>
        <Col span={12}>
          <div dangerouslySetInnerHTML={createMarkup()} />
        </Col>
      </Row>
      <Space direction="horizontal" size="small">
        <Button danger onClick={handleDelete}>
          Delete Notes
        </Button>
        <Button onClick={downloadNotes}>Download Notes</Button>
      </Space>
    </SSpace>
  );
};

export default Notes;

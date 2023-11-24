import { Button, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import styled from "styled-components";
import { getCurrentDateTime } from "../../../utils/dateUtils";

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

  return (
    <SSpace direction="vertical" size="small">
      <TextArea
        onChange={handleChange}
        value={value}
        placeholder="Enter your notes here..."
        autoSize={{ minRows: 25, maxRows: 25 }}
      />
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

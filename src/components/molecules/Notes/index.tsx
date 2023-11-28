import React, { useState } from "react";
import { Col, Row, Space, Switch, Tooltip } from "antd";
import { DeleteOutlined, ExportOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import styled from "styled-components";
import { getCurrentDateTime } from "../../../utils/dateUtils";
import { marked } from "marked";
import ButtonWithPopconfirm from "../../atoms/ButtonWithPopconfirm";
import ButtonWithTooltip from "../../atoms/ButtonWithTooltip";

const SSpace = styled(Space)`
  width: 100%;
`;

const Notes: React.FC = () => {
  const [value, setValue] = useState(localStorage.getItem("notes") || "");
  const [isMarkdownPreview, setIsMarkdownPreview] = useState(
    localStorage.getItem("isMarkdownPreview")
      ? localStorage.getItem("isMarkdownPreview") === "true"
      : true
  );

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setValue(e.target.value);
    localStorage.setItem("notes", e.target.value);
  };

  const handleDelete = () => {
    setValue("");
    localStorage.removeItem("notes");
  };

  const handleChsnageMarkdownPreview = () => {
    setIsMarkdownPreview(!isMarkdownPreview);
    localStorage.setItem("isMarkdownPreview", String(!isMarkdownPreview));
  };

  const cleateDownloadElement = (extension: "txt" | "md") => {
    const element = document.createElement("a");
    const file = new Blob([value], { type: "text/plain" });
    const fileName = "note_" + getCurrentDateTime() + "." + extension;
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    return element;
  };

  const downloadNotesTxt = () => {
    const element = cleateDownloadElement("txt");
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  const downloadNotesMd = () => {
    const element = cleateDownloadElement("md");
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  const createMarkup = () => {
    return { __html: marked(value) };
  };

  return (
    <SSpace direction="vertical" size="small">
      <Space direction="horizontal">
        Markdown Preview
        <Switch
          checked={isMarkdownPreview}
          onChange={handleChsnageMarkdownPreview}
        />
      </Space>
      <Row gutter={16}>
        <Col span={isMarkdownPreview ? 12 : 24}>
          <TextArea
            onChange={handleChange}
            value={value}
            placeholder="Enter your notes here..."
            autoSize={{ minRows: 25, maxRows: 25 }}
          />
        </Col>
        {isMarkdownPreview && (
          <Col span={12}>
            <div dangerouslySetInnerHTML={createMarkup()} />
          </Col>
        )}
      </Row>
      <Space direction="horizontal" size="small">
        <ButtonWithPopconfirm
          buttonProps={{ danger: true, icon: <DeleteOutlined /> }}
          popconfirmProps={{
            title: "メモを削除しますか？",
            okText: "削除",
            okType: "danger",
            cancelText: "キャンセル",
            onConfirm: handleDelete,
            onCancel: () => {},
            placement: "topLeft",
          }}
          buttonWrapper={({ children }) => {
            return <Tooltip title="Delete">{children}</Tooltip>;
          }}
        />
        <ButtonWithTooltip
          buttonProps={{
            icon: <ExportOutlined />,
            onClick: downloadNotesTxt,
          }}
          tooltipProps={{ title: "Export" }}
          buttonLabel="Export to txt"
        />
        <ButtonWithTooltip
          buttonProps={{
            icon: <ExportOutlined />,
            onClick: downloadNotesMd,
          }}
          tooltipProps={{ title: "Export" }}
          buttonLabel="Export to md"
        />
      </Space>
    </SSpace>
  );
};

export default Notes;

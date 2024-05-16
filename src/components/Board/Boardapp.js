import React, { useEffect, useState } from "react";
import Style from "../css/Board.module.css";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";

export default function Boardapp() {
  const [list, setList] = useState([]); // 리스트 관리
  const [editTitle, setEditTitle] = useState(""); // 제목 수정
  const [editBody, setEditBody] = useState(""); // 내용 수정
  const [showModal, setShowModal] = useState(false); // 내용 보여주기
  const [showForm, setShowForm] = useState(false); // 수정하기 폼
  const [selectedItem, setSelectedItem] = useState(null); // 현재 선택된 리스트

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => setList(response.data));
  }, []);

  const handleDelete = (index) => {
    const updatedList = list.filter((_, i) => i !== index);
    updatedList.forEach((item, i) => {
      item.id = i + 1;
    });
    setList(updatedList);
    setShowForm(false);
    setShowModal(false);
    setSelectedItem(null);
    setEditTitle("");
    setEditBody("");
  };

  const handleSave = (index) => {
    const updatedList = [...list];
    updatedList[index].title = editTitle;
    updatedList[index].body = editBody;
    setList(updatedList);
    setShowForm(false);
    setShowModal(false);
    setSelectedItem(null);
    setEditTitle("");
    setEditBody("");
    handleShowModal(index);
  };

  const handleShowModal = (index) => {
    setSelectedItem(list[index]);
    setEditTitle(list[index].title);
    setEditBody(list[index].body);
    setShowModal(true);
    setShowForm(false); // Reset showForm to false when a new item is clicked
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
    setEditTitle("");
    setShowForm(false);
  };

  const activeEnter = (e) => {
    if (e.key === "Enter") {
      handleSave(selectedItem.id - 1);
    }
  };

  const handleShowForm = () => setShowForm(true);

  return (
    <div className={Style.background}>
      <ul>
        {list.map((item, index) => (
          <li key={index} className={Style.card} onClick={() => handleShowModal(index)}>
            <div className={Style.modern_input}>
              <div className={Style.title}>{item.id}번</div>
              <br></br>
              <div className={Style.title}>제목 : {item.title}</div>
            </div>
          </li>
        ))}
      </ul>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>내용</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedItem &&
            (showForm ? (
              <Form onKeyDown={activeEnter}>
                <Form.Group className="mb-3">
                  <Form.Label>제목</Form.Label>
                  <Form.Control
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    autoFocus
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>내용</Form.Label>
                  <Form.Control as="textarea" rows={4} value={editBody} onChange={(e) => setEditBody(e.target.value)} />
                </Form.Group>
              </Form>
            ) : (
              <div>
                <p>
                  제목: <br />
                  <br />
                  {selectedItem.title}
                </p>
                <br />
                <br />
                <p>
                  내용: <br />
                  <br />
                  {selectedItem.body}
                </p>
              </div>
            ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleDelete(selectedItem.id - 1)}>
            삭제하기
          </Button>
          {showForm ? (
            <Button variant="primary" onClick={() => handleSave(selectedItem.id - 1)}>
              수정 완료
            </Button>
          ) : (
            <Button variant="primary" onClick={handleShowForm}>
              수정하기
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

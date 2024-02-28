// src/pages/Gallery.js

import axios from "axios";
import { useState } from "react";
import { Button, Card, FloatingLabel, Form, Modal, Row } from "react-bootstrap";

export default function Gallery(){
    //이미지 업로드 form 을 띄울지 여부를 상태값으로 관리 
    const [formShow, setFormShow]=useState(false);
    
    return (
        <>
            <h3>겔러리 입니다</h3>
            <button onClick={()=>{
                //업로드 폼을 보이도록 한다 
                setFormShow(true)
            }}>업로드</button>
            <Row>

            </Row>
            <UploadFormModal show={formShow} setShow={setFormShow}/>
        </>
    )
}

function UploadFormModal(props) {
    
    //입력한 설명 
    const [caption, setCaption]=useState("");
    //선택한 이미지 파일 
    const [image, setImage]=useState(null);
    //선택한 이미지 preview 관련 state
    const [previewImage, setPreviewImage]=useState(null);

    //이미지를 선택했을때 실행되는 함수
    const handleChange=(e)=>{
        //선택한 파일 얻어내기
        const file = e.target.files[0];
        console.log(file);
        setImage(file);
        //선택한 파일로 부터 이미지 로딩하기
        const reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onload=(event)=>{
          //읽은 파일 데이터 얻어내기 
		  const data=event.target.result;
          setPreviewImage(data);
        };
    }

    const handleUpload = ()=>{
        //FormData 에  입력한 caption 과 image 파일 정보를 담아서
        const formData=new FormData();
        formData.append("caption", caption);
        formData.append("image", image);
        axios.post("/gallery", formData, {
            headers:{"Content-Type":"multipart/form-data"}
        })
        .then(res=>{
            console.log(res.data);  
            props.onClose();
        })
        .catch(error=>{
            console.log(error);
        });
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={()=>{ 
            //props 로 전달받은 함수를 이용해서 Modal 을 숨기기
            props.setShow(false)
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            이미지 업로드 양식
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingInput" label="이미지 설명" className="mb-3">
            <Form.Control onChange={(e)=>setCaption(e.target.value)} name="caption" type="text"  placeholder="이미지 설명"/>
          </FloatingLabel>
          <FloatingLabel  controlId="floatingPassword" label="이미지 선택" className="mb-3">
            <Form.Control onChange={handleChange} name="image" type="file" accept="image/*" placeholder="이미지 선택" />
          </FloatingLabel>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={previewImage} />
            <Card.Body>
              <Card.Text>{caption}</Card.Text>
            </Card.Body>
          </Card> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleUpload}>업로드</Button>
        </Modal.Footer>
      </Modal>
    );
  }
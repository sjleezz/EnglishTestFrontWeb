import { forwardRef } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

const getRequest = async (url) => {
  const response = await axios.get(process.env.REACT_APP_API_URL + url);
  return response.data;
};

const postRequest = async (url, body) => {
  const response = await axios.post(process.env.REACT_APP_API_URL + url, body);
  return response.data;
};

const patchRequest = async (url, body) => {
  const response = await axios.patch(process.env.REACT_APP_API_URL + url, body);
  return response.data;
};

const deleteRequest = async (url) => {
  const response = await axios.delete(process.env.REACT_APP_API_URL + url);
  return response.data;
};

export const fetchGetRequest = (url, ref) => {
  getRequest(url).then((data) => {
    // console.log(data);
    ref.current.innerText = JSON.stringify(data, null, "\t");
  });
};

export const fetchPostRequest = (url, body, ref) => {
  postRequest(url, body).then((data) => {
    // console.log(data);
    ref.current.innerText = JSON.stringify(data, null, "\t");
  });
};

export const fetchPatchRequest = (url, body, ref) => {
  patchRequest(url, body).then((data) => {
    // console.log(data);
    ref.current.innerText = JSON.stringify(data, null, "\t");
  });
};

export const fetchDeleteRequest = (url, ref) => {
  deleteRequest(url).then((data) => {
    // console.log(data);
    ref.current.innerText = JSON.stringify(data, null, "\t");
  });
};

export const Response = forwardRef((props, ref) => {
  return (
    <Row>
      <Col md={3}>{props.name}</Col>
      <Col>
        <pre ref={ref}></pre>
      </Col>
    </Row>
  );
});

import {
  Button,
  Form,
  Image,
  Input,
  Modal,
  Select,
  Table,
  Tooltip,
  Upload,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "antd/es/form/Form";
import uploadFile from "../../utils/upload";

function MovieManagementPractice() {
  const [visible, setVisible] = useState(false);
  const [movies, setMovies] = useState([]);
  const [form] = useForm();

  async function fetchDataMovies() {
    const response = await axios.get(
      "https://662a451467df268010a33ecb.mockapi.io/Movie"
    );
    console.log(response.data);
    setMovies(response.data);
  }

  useEffect(() => {
    fetchDataMovies();
  }, []);

  function handleOpenModal() {
    setVisible(true);
  }

  function handleCloseModal() {
    setVisible(false);
    form.resetFields();
  }

  function handleOk() {
    form.submit();
  }

  async function handleSubmit(values) {
    const url = await uploadFile(values.poster_path.file.originFileObj);
    values.poster_path = url;
    const response = await axios.post(
      "https://662a451467df268010a33ecb.mockapi.io/Movie",
      values
    );
    setMovies(...movies, values);
    handleCloseModal();
    form.resetFields();
  }

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Trailer",
      dataIndex: "trailer",
      key: "trailer",
      render: (value) => (
        <Button type="link" onClick={() => window.open(value, "_blank")}>
          Watch trailer
        </Button>
      ),
    },
    {
      title: "Poster",
      dataIndex: "poster_path",
      key: "poster_path",
      render: (value) => <Image src={value} width={120} />,
    },
  ];

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  return (
    <div>
      <Tooltip title={"Click to add movie"}>
        <Button
          style={{ fontWeight: "bold" }}
          onClick={handleOpenModal}
          type="primary"
          size="large"
        >
          Add movie
        </Button>
      </Tooltip>
      <Modal
        title={"Movie Information"}
        open={visible}
        onOk={handleOk}
        onCancel={handleCloseModal}
      >
        <Form form={form} onFinish={handleSubmit} labelCol={{ span: "24" }}>
          <Form.Item
            name={"name"}
            label={"Movie name"}
            rules={[
              {
                required: true,
                message: "Please input movie name!",
              },
            ]}
          >
            <Input placeholder="Input movie name..." />
          </Form.Item>
          <Form.Item
            name={"description"}
            label={"Movie description"}
            rules={[
              {
                required: true,
                message: "Please input movie description!",
              },
            ]}
          >
            <Input.TextArea placeholder="Input movie description..." />
          </Form.Item>
          <Form.Item
            name={"category"}
            label={"Movie type"}
            rules={[
              {
                required: true,
                message: "Please select movie type!",
              },
            ]}
          >
            <Select
              placeholder={"Select"}
              style={{
                width: 150,
              }}
              options={[
                {
                  value: "Trending",
                  label: "Trending",
                },
                {
                  value: "Horror",
                  label: "Horror",
                },
                {
                  value: "Comedy",
                  label: "Comedy",
                },
                {
                  value: "Action",
                  label: "Action",
                },
              ]}
            />
          </Form.Item>
          <Form.Item
            name={"trailer"}
            label={"Movie trailer"}
            rules={[
              {
                required: true,
                message: "Please input movie description!",
              },
            ]}
          >
            <Input placeholder="Input movie trailer..." />
          </Form.Item>
          <Form.Item
            name={"poster_path"}
            label={"Poster"}
            rules={[
              {
                required: true,
                message: "Please upload movie poster!",
              },
            ]}
          >
            <Upload
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
      {previewImage && (
        <Image
          wrapperStyle={{
            display: "none",
          }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={previewImage}
        />
      )}
      <Table dataSource={movies} columns={columns} />
    </div>
  );
}

export default MovieManagementPractice;

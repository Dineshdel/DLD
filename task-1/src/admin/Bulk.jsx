import React, { useState } from 'react';
import { InboxOutlined} from '@ant-design/icons';
import { Button, message, Upload, Form, Result } from 'antd';
import axios from 'axios';

const { Dragger } = Upload;

const Bulk = () => {
  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [successfulUsers, setSuccessfulUsers] = useState(0);
  const [failedUsers, setFailedUsers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleUpload = async () => {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append('file', file);
    });

    setUploading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/user/bulk-register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Server response:', response.data);
      setFileList([]);
      setSuccessfulUsers(response.data.successfulUsers || 0);
      setFailedUsers(response.data.failedUsers || []);
    } catch (error) {
      console.error('Upload error:', error);
      message.error('Upload failed. Please try again.');
      setSuccessfulUsers(0);
      setFailedUsers([]);
    } finally {
      setUploading(false);
      setShowResult(true);
    }
  };

  const uploadProps = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      const isCsv = file.type === 'text/csv';
      if (!isCsv) {
        message.error(`${file.name} is not a csv file`);
      }
      setFileList(isCsv ? [...fileList, file] : fileList);
      return false;
    },
    fileList,
  };

  const onFinish = () => {
    handleUpload();
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', marginTop: '50px' }}>
        <h1>Upload a CSV File which consists of user details</h1>
      </div>
      {!showResult ? (
        <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
          <Form onFinish={onFinish} layout="vertical">
            <Form.Item
              name="upload"
              valuePropName="fileList"
              getValueFromEvent={(e) => e.fileList}
              rules={[{ required: true, message: 'Please upload a file!' }]}
            >
              <Dragger {...uploadProps} style={{ maxWidth: '500px' }}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
              </Dragger>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                disabled={fileList.length === 0}
                loading={uploading}
                style={{ marginTop: 16 }}
              >
                {uploading ? 'Uploading' : 'Start Upload'}
              </Button>
            </Form.Item>
          </Form>
        </div>
      ) : (
        <Result
          status="info"
          title="Upload Results"
          subTitle={`Successful Registers: ${successfulUsers}, Failed Users: ${failedUsers.length}`}
          extra={[
            <Button type="primary" key="upload" onClick={() => setShowResult(false)}>
              Upload Another File
            </Button>,
          ]}
        >
          {failedUsers.length > 0 && (
            <div>
              <p>Failed Users:</p>
              <ul>
                {failedUsers.map((user, index) => (
                  <li key={index}>
                    {`Email: ${user.userData.email}, Error: ${user.error}`}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Result>
      )}
    </div>
  );
};

export default Bulk;

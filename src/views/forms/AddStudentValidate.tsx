import { Button, Checkbox, Form, Input, Radio, Space, Select } from "antd";
import { useState } from "react";
import type { SelectProps } from "antd";
type FieldType = {
  email: string;
  name: string;
  gender: string;
  skills: string[];
};
const initialValues: FieldType = {
  email: "",
  name: "",
  gender: "",
  skills: [],
};
const a = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const options: SelectProps["options"] = [];
a.forEach((i) => options.push({ label: i, value: i }));
const AddStudentValidate = () => {
  function handleFinish(e) {
    console.log(e);
  }
  return (
    <div>
      <Form
        onFinish={handleFinish}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
            },
          ]}
        >
          <Input name="email" />
        </Form.Item>

        <Form.Item<FieldType>
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input name="name" />
        </Form.Item>

        <Form.Item<FieldType>
          label="Gender"
          name="gender"
          rules={[{ required: true, message: "Please choose one!" }]}
        >
          <Radio.Group name="radio">
            <Space direction="vertical">
              <Radio value="Male"> Male </Radio>
              <Radio value="Female"> Female </Radio>
              <Radio value="Other"> Other </Radio>
            </Space>
          </Radio.Group>
        </Form.Item>
        <Form.Item<FieldType>
          label="Select"
          name="skills"
          rules={[{ required: true, message: "Please choose one!" }]}
        >
          <Select
            mode="multiple"
            allowClear
            style={{ width: "100%" }}
            placeholder="Please select"
            options={options}
            onChange={handleOnSelect}
          ></Select>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button className="bg-sky-400" type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default AddStudentValidate;

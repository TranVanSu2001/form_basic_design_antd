import "./App.css";
import { Form, Button, Checkbox, DatePicker, Input, Select } from "antd";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form
          autoComplete="on"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
          onFinish={(value) => {
            console.log({ value });
          }}
          onFinishFailed={(error) => {
            console.log({ error });
          }}
        >
          <Form.Item
            name="fullName"
            label="Full Name"
            rules={[
              {
                required: true,
                message: "Enter your name",
              },
              {
                whitespace: true,
              },
              {
                min: 3,
              },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Enter your email",
              },
              {
                type: "email",
                message: "Enter a valid email",
              },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your email" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Type your password" />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Confirm password"
            dependencies={["password"]}
            rules={[
              {
                required: true,
              },
              { min: 6 },
              {
                validator: (_, value) =>
                  value && value.includes("A")
                    ? Promise.resolve()
                    : Promise.reject("Password does not match criteria."),
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject("The two password do not match");
                },
              }),
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Confirm your password" />
          </Form.Item>

          <Form.Item name="gender" label="Gender" requiredMark="optional">
            <Select placeholder="Select gender">
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="dob"
            label="Date of birth"
            rules={[
              {
                required: true,
                message: "Please provide your date of birth",
              },
            ]}
            hasFeedback
          >
            <DatePicker
              style={{ width: "100%" }}
              placeholder="Chose your birth"
            />
          </Form.Item>

          <Form.Item
            name="website"
            label="Website"
            rules={[{ type: "url", message: "Please enter a valid url" }]}
            hasFeedback
          >
            <Input placeholder="Add your website url" />
          </Form.Item>

          <Form.Item
            name="agreement"
            wrapperCol={{ span: 24 }}
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        "To proceed, you need to agree with our terms and conditions"
                      ),
              },
            ]}
          >
            <Checkbox>
              {" "}
              Agree to our <a href="#">Terms and Conditions</a>
            </Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }}>
            <Button block type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </header>
    </div>
  );
}

export default App;

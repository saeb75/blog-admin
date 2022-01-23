import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@material-tailwind/react";
import React from "react";
import H5 from "@material-tailwind/react/Heading5";
import InputIcon from "@material-tailwind/react/InputIcon";
const Login = () => {
  return (
    <div className="w-full h-screen bg-login-pattern bg-cover flex justify-center items-center  ">
      <div className="w-full h-full rounded-md backdrop-blur flex justify-center items-center ">
        <div className="w-[360px]">
          <Card>
            <CardHeader color="lightBlue" size="md">
              <H5 color="white">Login</H5>
            </CardHeader>

            <CardBody className="mt-8">
              <div className="mb-8 px-4">
                <InputIcon
                  type="email"
                  color="lightBlue"
                  placeholder="Email Address"
                  iconName="email"
                />
              </div>
              <div className="mb-4 px-4">
                <InputIcon
                  type="password"
                  color="lightBlue"
                  placeholder="password"
                  iconName="lock"
                />
              </div>
            </CardBody>
            <CardFooter>
              <div className="flex justify-center">
                <Button
                  color="lightBlue"
                  buttonType="link"
                  size="lg"
                  ripple="dark"
                >
                  Get Started
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;

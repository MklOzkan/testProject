"use client";
import { loginAction } from "@/actions/auth-actions";
import { initialResponse } from "@/helpers/form-validation";
import React from "react";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import { useFormState } from "react-dom";
import "./loginForm.scss";
import PasswordInput from "../common/formFields/password-input";
import SubmitButton from "../common/formFields/submit-button";

const LoginForm = ({ role = "customer" }) => {
  const [state, dispatch] = useFormState(loginAction, initialResponse);

  return (
    <Container className="login-form">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card>
            <Card.Body>
              {state?.message ? (
                <Alert variant="danger">{state?.message}</Alert>
              ) : null}

              <Form action={dispatch} noValidate>
                {role === "admin" ? (
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label className="text-start w-100 fs-4">
                      Email adresi
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Lütfen email adresinizi giriniz"
                      name="email"
                      isInvalid={state?.errors?.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {state?.errors?.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                ) : null}

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label className="text-start w-100 fs-4">
                    Şifre
                  </Form.Label>
                  <PasswordInput
                    placeholder="Lütfen şifrenizi giriniz"
                    name="password"
                    //defaultValue="123456Aa."
                    error={state?.errors?.password}
                  />
                </Form.Group>

                <SubmitButton></SubmitButton>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;

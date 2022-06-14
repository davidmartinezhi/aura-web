import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function Newsletter() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Escribenos y nos pondremos en contacto</Form.Label>
        <Form.Control type="email" placeholder="Correo electrónico" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="textArea">
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-area">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Recibir promociones y noticias" />
  </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function Newsletter() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{color: "rgb(255,255,255)", fontSize:"15px" }}>Escribenos y nos pondremos en contacto</Form.Label>
        <Form.Control type="email" placeholder="Correo electrónico" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicTextArea">
        <Form.Control type="text-area" placeholder="Escribe tu consulta" />
        <Form.Text className="text-area">
          
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Recibir promociones y noticias" style={{color: "rgb(255,255,255)"}}/>
      </Form.Group>
      <Button disabled={true} variant="primary" type="submit">
        Confirmar
      </Button>
    </Form>
  );
}

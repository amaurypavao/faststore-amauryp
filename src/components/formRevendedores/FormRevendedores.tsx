import React from "react";
import {
  InputField as UIInputField,
  Button as UIButton
} from "@faststore/ui";

import styles from './FormRevendedores.module.scss'

import { useCallback, useState } from "react";
import { gql } from "@faststore/core/api";
import { useLazyQuery_unstable as useLazyQuery } from "@faststore/core/experimental";


/* export interface FormularioCadastroRevendedor {
  title: string;
  textButtonEnviar: string;
} */

export const mutation = gql(`
  mutation SubmitContactForm($data: ContactFormInput!) {
    submitContactForm(input: $data) {
      message
    }
  }
`);

export const CallToActFormularioCadastroRevendedor = () => {
  const [submitContactForm, { data, error }] = useLazyQuery(mutation, {
    data: { name: "", email: "", phone: ""},
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const formValues = {
        name,
        email,
        phone
      };

      submitContactForm({ data: formValues });

      if (error) {
        console.error(error);
      }

      if (data) {
        setName("");
        setEmail("");
        setPhone("");
      }
    },
    [submitContactForm]
  );

  return (
    <section className={styles.formRevendedores}>
      {/* <h1>{props.title}</h1> */}
      <h1>Contato</h1>
      <form onSubmit={onSubmit}>
        <UIInputField
          id="name"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <UIInputField
          id="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <UIInputField
          id="phone"
          label="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <UIButton fs-color-primary-bkg type="submit" variant="primary">
          Enviar
        </UIButton>
      </form>
    </section>
  );
};

export default CallToActFormularioCadastroRevendedor

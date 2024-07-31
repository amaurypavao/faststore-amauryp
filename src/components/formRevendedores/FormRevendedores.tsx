import React from "react";
import { InputField } from '@faststore/ui'
import { Button } from '@faststore/ui'
import styles from './FormRevendedores.module.scss'

export interface FormularioCadastroRevendedor {
  title: string;
  textButtonEnviar: string;
}

export default function CallToActFormularioCadastroRevendedorion(props: FormularioCadastroRevendedor) {
  return (
    <section className={styles.formRevendedores}>
      <h1>{props.title}</h1>
      <InputField label="Nome" id="name"/>
      <InputField label="Email" id="email"/>
      <InputField label="Telefone" id="phone"/>
      <Button fs-color-primary-bkg variant="primary">{props.textButtonEnviar}</Button>
    </section>
  );
}
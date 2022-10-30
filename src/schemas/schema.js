import * as Yup from "yup";

const formSchema = Yup.object().shape({
  name: Yup.string().required("Este campo é obrigatório."),
  email: Yup.string()
    .email("Insira um email válido.")
    .required("Este campo é obrigatório."),
  number: Yup.string().required("Este campo é obrigatório."),
  cpf: Yup.string().required("Este campo é obrigatório."),
  country: Yup.array()
    .required("Este campo é obrigatório.")
    .min(1, "Escolha pelo menos um destino.")
    .of(
      Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      })
    ),
  city: Yup.array()
    .required("Este campo é obrigatório.")
    .min(1, "Escolha pelo menos um destino.")
    .of(
      Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      })
    ),
});

export default formSchema;

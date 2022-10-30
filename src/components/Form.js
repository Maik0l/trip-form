import React, { useContext } from "react";
import formSchema from "../schemas/schema";
import ReactInputMask from "react-input-mask";

import { Select } from "chakra-react-select";
import { TripContext } from "../providers/TripProvider";
import { yupResolver } from "@hookform/resolvers/yup";
import { SelectContext } from "../providers/SelectProvider";
import { useForm, useController } from "react-hook-form";
import {
  FormErrorMessage,
  FormControl,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";

function Form({ onOpen }) {
  const { countries, cities } = useContext(SelectContext);
  const { setTrip } = useContext(TripContext);

  const defaultValues = {
    name: "",
    email: "",
    number: "",
    cpf: "",
    country: [],
    city: [],
  };

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues,
  });

  const toSubmit = (data) => {
    setTrip(data);
    reset();
    onOpen();
  };

  const {
    field: countryField,
    fieldState: { error: countryError },
  } = useController({
    name: "country",
    control,
  });

  const {
    field: cityField,
    fieldState: { error: cityError },
  } = useController({
    name: "city",
    control,
  });

  return (
    <>
      <form onSubmit={handleSubmit(toSubmit)}>
        <Text color={"#6581A6"} mb={4}>
          Primeiro, vamos precisar de algumas informações.
        </Text>
        <FormControl isInvalid={!!errors.name} mb={4}>
          <Input
            {...register("name")}
            bgColor={"#FFFFFF"}
            placeholder={"Nome"}
            variant={"flushed"}
          />
          <FormErrorMessage mt={0}>{errors?.name?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.email} mb={4}>
          <Input
            {...register("email")}
            bgColor={"#FFFFFF"}
            placeholder={"Email"}
            variant={"flushed"}
          />
          <FormErrorMessage mt={0}>{errors?.email?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.number} mb={4}>
          <Input
            as={ReactInputMask}
            mask={"(99) 999999999"}
            {...register("number")}
            bgColor={"#FFFFFF"}
            placeholder={"Telefone"}
            variant={"flushed"}
          />
          <FormErrorMessage mt={0}>{errors?.number?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.cpf} mb={4}>
          <Input
            as={ReactInputMask}
            mask={"999.999.999-99"}
            {...register("cpf")}
            bgColor={"#FFFFFF"}
            placeholder={"CPF"}
            variant={"flushed"}
          />
          <FormErrorMessage mt={0}>{errors?.cpf?.message}</FormErrorMessage>
        </FormControl>
        <Text color={"#6581A6"} mb={4}>
          Agora, nos diga para onde é seu destino.
        </Text>
        <FormControl isInvalid={!!countryError} id="country" mb={4}>
          <Select
            isMulti
            options={countries}
            {...countryField}
            placeholder="País"
            variant="flushed"
            menuPlacement="top"
          />
          <FormErrorMessage>{countryError?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!cityError} id="city">
          <Select
            isMulti
            options={cities}
            {...cityField}
            placeholder="Cidade"
            variant="flushed"
            menuPlacement="top"
          />
          <FormErrorMessage>{cityError?.message}</FormErrorMessage>
        </FormControl>
        <Button mt={4} w={"100%"} type="submit">
          Enviar
        </Button>
      </form>
    </>
  );
}

export default Form;

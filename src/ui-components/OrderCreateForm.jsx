/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
import { API } from "aws-amplify";
import { createOrder } from "../graphql/mutations";
export default function OrderCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    grandTotal: "",
    orderDate: "",
  };
  const [grandTotal, setGrandTotal] = React.useState(initialValues.grandTotal);
  const [orderDate, setOrderDate] = React.useState(initialValues.orderDate);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setGrandTotal(initialValues.grandTotal);
    setOrderDate(initialValues.orderDate);
    setErrors({});
  };
  const validations = {
    grandTotal: [],
    orderDate: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          grandTotal,
          orderDate,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: createOrder,
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "OrderCreateForm")}
      {...rest}
    >
      <TextField
        label="Grand total"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={grandTotal}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              grandTotal: value,
              orderDate,
            };
            const result = onChange(modelFields);
            value = result?.grandTotal ?? value;
          }
          if (errors.grandTotal?.hasError) {
            runValidationTasks("grandTotal", value);
          }
          setGrandTotal(value);
        }}
        onBlur={() => runValidationTasks("grandTotal", grandTotal)}
        errorMessage={errors.grandTotal?.errorMessage}
        hasError={errors.grandTotal?.hasError}
        {...getOverrideProps(overrides, "grandTotal")}
      ></TextField>
      <TextField
        label="Order date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={orderDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              grandTotal,
              orderDate: value,
            };
            const result = onChange(modelFields);
            value = result?.orderDate ?? value;
          }
          if (errors.orderDate?.hasError) {
            runValidationTasks("orderDate", value);
          }
          setOrderDate(value);
        }}
        onBlur={() => runValidationTasks("orderDate", orderDate)}
        errorMessage={errors.orderDate?.errorMessage}
        hasError={errors.orderDate?.hasError}
        {...getOverrideProps(overrides, "orderDate")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

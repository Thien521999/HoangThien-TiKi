// libs
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
// components
import QuantityField from '../../../../components/form-controls/QuantityField';

export interface IInputAddToCartForm {
  quantity?: number;
}

interface AddToCartFormProps {
  onSubmit?: (values: IInputAddToCartForm) => void;
}

const AddToCartForm: React.FC<AddToCartFormProps> = ({ onSubmit = null }) => {
  const schema = yup.object().shape({
    quantity: yup
      .number()
      .required('Please enter quantity')
      .min(1, 'Minimum value is 1')
      .typeError('Please enter a number'),
  });

  const form = useForm<IInputAddToCartForm>({
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(schema) as any,
  });

  const handleSubmit = async (values: any) => {
    if (!onSubmit) return;
    await onSubmit(values);
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)} className="add__cart">
      <QuantityField name="quantity" label="Quantity" form={form} />

      <Button type="submit" variant="contained" color="primary" fullWidth size="large">
        Add to cart
      </Button>
    </form>
  );
};

export default AddToCartForm;

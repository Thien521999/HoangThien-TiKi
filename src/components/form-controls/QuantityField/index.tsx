// libs
import { Box } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import React from 'react';
import { Controller } from 'react-hook-form';
// others
import './style.scss';

const QuantityField = (props: any) => {
  const { form, name, disabled, onChange } = props;

  const { errors } = form.formState;
  const hasError = !!errors[name];

  const handleChange = (value: number) => {
    if (value >= 0) {
      form.setValue(name, value);
      if (onChange) onChange(value);
    }
  };

  return (
    <FormControl error={hasError} fullWidth margin="normal" variant="outlined" size="small">
      <Controller
        name={name}
        control={form.control}
        render={({ field }) => (
          <Box className="box">
            <span
              className="icon-remove"
              onClick={() => {
                handleChange(field.value - 1);
              }}
            >
              <HorizontalRuleIcon />
            </span>
            <OutlinedInput
              id={name}
              type="number"
              disabled={disabled}
              value={field.value}
              onBlur={field.onBlur}
              onChange={(e) => {
                handleChange(Number.parseInt(e.target.value));
              }}
            />
            <span
              className="icon-add"
              onClick={() => {
                handleChange(field.value + 1);
              }}
            >
              <AddIcon />
            </span>
          </Box>
        )}
      />
      <FormHelperText>{errors[name]?.message}</FormHelperText>
    </FormControl>
  );
};

export default QuantityField;

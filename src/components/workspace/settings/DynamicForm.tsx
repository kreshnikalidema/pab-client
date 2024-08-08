import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import {
  TextField,
  Button,
  Container,
  Grid,
  Typography,
  Box,
  IconButton,
} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import { observer } from 'mobx-react-lite';
import { Component } from '@app/helpers/component';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  ListSubheader,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export type Props = {
  component: Component;
};

interface FormValues {
  componentName: string;
  control: string;
  variant: string;
  properties: { [key: string]: string }[];
  variables: { [key: string]: string }[];
}

export const DynamicForm: React.FC<Props> = observer((props) => {
  const { component } = props;

  const { control, handleSubmit, register, reset } = useForm<FormValues>({
    defaultValues: {
      componentName: component.componentName,
      control: component.control ?? '',
      variant: component.variant ?? '',
      properties: [],
      variables: [],
    },
  });

  const {
    fields: propertyFields,
    append: appendProperty,
    remove: removeProperty,
  } = useFieldArray({
    control,
    name: 'properties',
  });

  const {
    fields: variableFields,
    append: appendVariable,
    remove: removeVariable,
  } = useFieldArray({
    control,
    name: 'variables',
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    reset();
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Dynamic Form
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Component Name"
              fullWidth
              {...register('componentName')}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Control" fullWidth {...register('control')} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Variant" fullWidth {...register('variant')} />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6">Properties</Typography>
            {propertyFields.map((field, index) => (
              <Box key={field.id} display="flex" alignItems="center">
                <TextField
                  label={`Property Key ${index + 1}`}
                  fullWidth
                  {...register(`properties.${index}.key` as const)}
                />
                <TextField
                  label={`Property Value ${index + 1}`}
                  fullWidth
                  {...register(`properties.${index}.value` as const)}
                />
                <IconButton
                  aria-label="remove property"
                  onClick={() => removeProperty(index)}
                >
                  <RemoveIcon />
                </IconButton>
              </Box>
            ))}
            <Button
              variant="outlined"
              onClick={() => appendProperty({ key: '', value: '' })}
            >
              Add Property
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6">Variables</Typography>
            {variableFields.map((field, index) => (
              <Box key={field.id} display="flex" alignItems="center">
                <TextField
                  label={`Variable Key ${index + 1}`}
                  fullWidth
                  {...register(`variables.${index}.key` as const)}
                />
                <TextField
                  label={`Variable Value ${index + 1}`}
                  fullWidth
                  {...register(`variables.${index}.value` as const)}
                />
                <IconButton
                  aria-label="remove variable"
                  onClick={() => removeVariable(index)}
                >
                  <RemoveIcon />
                </IconButton>
              </Box>
            ))}
            <Button
              variant="outlined"
              onClick={() => appendVariable({ key: '', value: '' })}
            >
              Add Variable
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
      <Box height={20} />
      <List subheader={<ListSubheader>Children</ListSubheader>}>
        {component.children.map((item, index) => (
          <ListItem key={index}>
            <ListItemText>{item.componentName}</ListItemText>
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                onClick={() => component.removeChild(item)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Container>
  );
});

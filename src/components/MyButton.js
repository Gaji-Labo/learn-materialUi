import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export default function MyButton(props) {
  return (
      <Button onClick={props.onClick}>
          {props.children}
      </Button>
  );
}

import React, { useState, useRef } from 'react';

import { Card } from '../ui';
import { Form } from './styles';

function InputForm({ placeholder, handleSubmit }) {
  const formRef = useRef();
  const [value, setValue] = useState('');

  function clear() {
    setValue('');
    formRef.current.reset();
  }

  function onChange(e) {
    e.preventDefault();
    setValue(e.currentTarget.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    if (handleSubmit) {
      handleSubmit(value);
      clear();
    }
  }

  return (
    <Card>
      <Form onSubmit={onSubmit} ref={formRef}>
        <input type="text" onChange={onChange} placeholder={placeholder} />
        <button type="button" onClick={onSubmit}>
          ok
        </button>
      </Form>
    </Card>
  );
}

export default InputForm;

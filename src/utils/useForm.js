import {useState} from 'react'

export default function useForm(defaults){
  const [values, setValue] = useState(defaults);
  // check for number
  let {value} = e.target;
  if(e.target.value.type == 'number'){
    value = parseInt(value);
  }

  function updateValue(e){
    setValue({
      ...values,
      [e.target.name]: value,
    })
  }

  return {values, updateValue};
}
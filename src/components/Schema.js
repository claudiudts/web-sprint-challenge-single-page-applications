import * as yup from "yup"

const schema = yup.object().shape({
    name:
    yup.string().required('Name required').min(2, 'Name must be at least 2 characters long'),
    size:
    yup.boolean().oneOf([true], 'you might need a pizza size'),
    ham:
    yup.boolean(),
    onion:
    yup.boolean(),
    jalapeno:
    yup.boolean(),
    specialInfo:
    yup.string(),
  })

  export default schema;
import { FunctionComponent } from 'react'
import Typography from '../typography/Typography';

interface Props {
  text: string;
}
const AddressTitle: FunctionComponent<Props> = ( { text = ""}) => {
  return (
    <Typography tag="p" classname="font-bold">{text}</Typography>
  )
}

export default AddressTitle
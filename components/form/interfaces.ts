export type FieldType =
  | 'text'
  | 'textarea'
  | 'select'
  | 'checkbox'
  | 'radio'
  | 'file'
  | 'hidden'
  | 'number'
  | 'date'
  | 'time'
  | 'datetime-local'
  | 'month'
  | 'week'
  | 'color'
  | '';

export interface FieldIF {
  name: string;
  type?: FieldType;
  label?: string | JSX.Element;
  required?: boolean;
  value?: string | number | Date | any;
  placeholder?: string;
  disabled?: boolean;
  rows?: number;
  checked?: boolean;
}
// Input

export interface InputPropsIF {
  field: FieldIF;
  error?: string;
  onChange?:
    | React.ChangeEventHandler<HTMLTextAreaElement>
    | React.ChangeEventHandler<HTMLInputElement>
    | any;
  onKeyUp?: any;
  noBorder?: boolean;
  classNames?: {
    wrapper?: string;
    input?: string;
    label?: string;
    inputWrapper?: string;
  };
  icon?: JSX.Element;
  iconPosition?: 'left' | 'right';
  register?: any;
  defaultValue?: any;
}

import React from 'react';
import { InputPropsIF } from './interfaces';

const Input = ({
  field,
  error,
  onChange,
  classNames,
  noBorder,
  icon,
  iconPosition,
  register,
  onKeyUp,
}: InputPropsIF) => {
  return (
    <div
      className={`${classNames?.wrapper ?? 'flex flex-col'}`}
      key={field.name}
    >
      {field?.label && (
        <label
          className={`w-full text-xs font-semibold dark:text-gray-4 ${
            classNames?.label ?? 'mb-2'
          }`}
          htmlFor={field.name}
        >
          {field?.label}{' '}
          {field?.required && (
            <sup className="text-xs text-red-primary opacity-80">*</sup>
          )}
        </label>
      )}
      {field?.type && field?.type === 'textarea' ? (
        <textarea
          className={`${
            !field?.rows ? 'h-input' : ''
          } w-full rounded-md border-gray-1 px-3 py-2 text-sm focus:outline-none dark:bg-gray-5 ${
            classNames?.input ?? 'dark:text-gray-1'
          } ${
            noBorder
              ? 'h-8'
              : 'focus:border-theme-bg hover:border-theme-text-footer border-theme-forms-selectBorder border hover:ring-1 focus:ring-1'
          }`}
          id={field?.name}
          name={field?.name}
          required={field?.required || false}
          placeholder={field?.placeholder || `Enter ${field?.label}`}
          autoComplete="off"
          onChange={onChange}
          onKeyUp={onKeyUp}
          value={field?.value}
          disabled={field?.disabled || false}
          rows={field?.rows || 1}
          {...register}
        />
      ) : (
        <div
          className={`h-input hover(:not focus):outline-none flex items-center rounded-md ${
            noBorder
              ? 'h-8'
              : 'hover(:not focus):border-1 border border-gray-1 hover:ring-1 focus:ring-1'
          } ${error ? 'border-error border-2' : 'border-gray-border'} ${
            classNames?.inputWrapper ?? ''
          } ${icon ? 'px-2' : ''}`}
        >
          {icon && iconPosition === 'left' && icon}
          <input
            className={`hover(:not focus):outline-none w-full rounded-md border-0 p-2 text-sm focus:border-0 focus:outline-none ${
              classNames?.input ?? 'dark:bg-gray-5 dark:text-gray-1'
            } ${noBorder ? 'h-8' : 'border-0 hover:ring-0 focus:ring-0'}`}
            type={field?.type || 'text'}
            id={field?.name}
            name={field?.name}
            required={field?.required || false}
            placeholder={field?.placeholder || `Enter ${field?.label}`}
            autoComplete="off"
            onChange={onChange}
            onKeyUp={onKeyUp}
            value={field?.value}
            disabled={field?.disabled || false}
            // ref={register}
            // defaultValue={defaultValue ?? field?.value ?? ""}
            {...register}
            // ref={register ?? null}
            // {...register(field?.name, { required: field?.required || false })}
          />
          {icon && iconPosition === 'right' && icon}
        </div>
      )}
      {error && (
        <div className="mt-1 flex items-center text-xs text-red-primary">
          <span className="material-icons-outlined sm mx-1 text-base font-normal">
            info
          </span>
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;

import React from 'react'
import { InputNumber, type InputNumberProps } from 'antd'
import { cn } from '../../../../helpers/general.helpers'

export type DPNumberInputProps = InputNumberProps & {
}   

export default function DPNumberInput({className, ...props}: DPNumberInputProps) {
  return (
    <InputNumber className={cn("[&_input]:!text-dp-gray-semi [&_input]:placeholder:!text-dp-gray-semi",className)} {...props} />
  )
}

import { Checkbox, ConfigProvider, type CheckboxProps } from "antd";

export type DPCheckboxProps = CheckboxProps;

export default function DPCheckbox({
    children,
    className,
    ...props
}: DPCheckboxProps) {
    return (
        <ConfigProvider theme={{ token: { borderRadius: 4 } }}>
            <Checkbox
            className="[&_.ant-checkbox-inner]:after:scale-[0.8] [&_.ant-checkbox-inner]:after:!top-[0.5rem]"
                {...props}
            >
                {children}
            </Checkbox>
        </ConfigProvider>
    );
}

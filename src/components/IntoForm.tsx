// components/InfoForm.tsx
import { Button, Input, Space } from "antd";

type InfoFormProps = {
  value: string;
  onChange: (val: string) => void;
  onSubmit: () => void;
};

export const InfoForm = ({ value, onChange, onSubmit }: InfoFormProps) => (
  <Space.Compact style={{ width: "100%" }}>
    <Input value={value} onChange={(e) => onChange(e.target.value)} />
    <Button type="primary" onClick={onSubmit}>
      Get info
    </Button>
  </Space.Compact>
);

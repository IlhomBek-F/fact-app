// components/TypeSelector.tsx
import { Radio } from "antd";
import { InfoType } from "../core/enums";
import type { RadioChangeEvent } from "antd";

type TypeSelectorProps = {
  selected: InfoType;
  onChange: (e: RadioChangeEvent) => void;
};

export const TypeSelector = ({ selected, onChange }: TypeSelectorProps) => (
  <Radio.Group onChange={onChange} value={selected}>
    <Radio.Button value={InfoType.Trivia}>random/trivia</Radio.Button>
    <Radio.Button value={InfoType.Year}>random/year</Radio.Button>
    <Radio.Button value={InfoType.Date}>random/date</Radio.Button>
    <Radio.Button value={InfoType.Math}>random/math</Radio.Button>
  </Radio.Group>
);

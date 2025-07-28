import { useEffect, useState } from "react";
import "./App.css";
import {
  Flex,
  message,
  type RadioChangeEvent,
} from "antd";
import { InfoType } from "./core/enums";
import { getDisplayTitle, isNumber } from "./helper";
import { useInfo } from "./hooks/useInfo";
import { InfoForm } from "./components/IntoForm";
import { TypeSelector } from "./components/TypeSelector";
import { InfoCard } from "./components/InfoCard";

function App() {
  const [messageApi, messageContext] = message.useMessage();
  const [type, setType] = useState<InfoType>(InfoType.Year);
  const [value, setValue] = useState<string>("");

  const { info, loading, fetchInfo } = useInfo();

  useEffect(() => {
    fetchInfo(0, type, showErrorMessage);
  }, [type]);

  const handleRadioChange = (e: RadioChangeEvent) => {
    setType(e.target.value);
    setValue("");
  };

  const handleSubmit = () => {
    if (isNumber(value)) {
      fetchInfo(+value, type, showErrorMessage);
    } else {
      showErrorMessage("Value is not a number");
    }
  };

  const showErrorMessage = (message: string) => {
    messageApi.open({ type: "error", content: message });
  };

  return (
    <>
      {messageContext}
      <div className="container">
        <Flex vertical gap={10}>
          <InfoForm value={value} onChange={setValue} onSubmit={handleSubmit} />
          <TypeSelector
            selected={type}
            onChange={handleRadioChange}
          />
          <InfoCard title={getDisplayTitle(value, type)} description={info} loading={loading} />
        </Flex>
      </div>
    </>
  );
}

export default App;

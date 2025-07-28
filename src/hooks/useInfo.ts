import { useState } from "react";
import { getInfo } from "../api";
import type { InfoType } from "../core/enums";

export function useInfo() {
  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchInfo = async (value: number = 0, type: InfoType, onError: (msg: string) => void) => {
    setLoading(true);
    setInfo("");

    try {
      const res = await getInfo(value, type);
      const text = await res.text();

      if (!res.ok) throw new Error("Something went wrong. Please try again later");

      setInfo(text);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Unknown error occurred";
      onError(msg);
    } finally {
      setLoading(false);
    }
  };

  return { info, loading, fetchInfo };
}
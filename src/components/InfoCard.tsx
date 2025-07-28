// components/InfoCard.tsx
import { Card } from "antd";

type InfoCardProps = {
  title: string;
  description: string;
  loading: boolean;
};

export const InfoCard = ({ title, description, loading }: InfoCardProps) => (
  <Card loading={loading} style={{ minWidth: 300 }}>
    <Card.Meta title={title} description={<p>{description}</p>} />
  </Card>
);
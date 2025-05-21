import React from "react";

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => (
  <div className="p-4 border rounded shadow">
    <h2 className="text-xl font-semibold">{title}</h2>
    <p>{description}</p>
  </div>
);

export default Card;

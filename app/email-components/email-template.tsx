import * as React from "react";

interface EmailTemplateProps {
  name: string;
  message: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  message,
  email,
}) => (
  <div>
    <h1>Lastest message from Portfolio received from {name}</h1>
    <p>His message goes as follows: {message}</p>
    <p>You can contact him at: {email}</p>
  </div>
);

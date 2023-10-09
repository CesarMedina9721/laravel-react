import React, { useState } from "react";
import axios from "axios";

const DiscordWebhookForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://discord.com/api/webhooks/1161059540666691694/llK8RC5SHJz-o63bcHC-km3HdwA4BySF_raHa2Xs6OmTjwKsdYx-VF1isY4xFI0hWJly", {
        username: formData.username,
        content: formData.message,
      });
      console.log("Mensaje enviado con éxito");
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre de Usuario:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Mensaje:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit">Enviar Mensaje</button>
    </form>
  );
};

export default DiscordWebhookForm;
import { useState } from "react";

export default function BasicRoom({
  message,
  messages,
  setMessage,
  handleSubmit,
}) {
  return (
    <div>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        Enter a message
        <input
          type="text"
          className="text-black rounded mb-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div>
          <input
            className="border-2 border-white rounded p-2 cursor-pointer"
            type="submit"
          />
        </div>
      </form>

      <div>
        {messages.map((message, idx) => {
          return (
            <p className="text-white" key={idx}>
              {message}
            </p>
          );
        })}
      </div>
    </div>
  );
}

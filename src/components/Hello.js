import { useState } from "react";

function Hello({ age }) {
  const [name, setName] = useState("Mike");
  const msg = age >= 19 ? "성인입니다." : "미성년자입니다.";

  return (
    <div>
      <h2>
        {name} ({age}) : {msg}
      </h2>
      <h3>Hello {name}!</h3>

      <button
        onClick={() => {
          setName(name === "Mike" ? "Jane" : "Mike");
        }}
      >
        Change
      </button>
    </div>
  );
}

export default Hello;

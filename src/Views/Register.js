import {useState} from 'react';
function Register() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(inputs));
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        帳號:
        <input
          type="text"
          name="userId"
          value={inputs.userId || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        姓名:
        <input
          type="text"
          name="name"
          value={inputs.name || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        密碼:
        <input
          type="password"
          name="password"
          value={inputs.password || ""}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  );
}
export default Register;

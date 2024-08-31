import React, { useState } from 'react';

const RegistrationForm = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.username) newErrors.username = 'Username is required';
    if (!form.email) newErrors.email = 'Email is required';
    if (!form.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', form);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" name="username" value={form.username} onChange={handleChange} />
        {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} />
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={form.password} onChange={handleChange} />
        {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;

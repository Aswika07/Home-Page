// Controller Hook: Handles form state and submission
import { useState } from 'react';
import { submitContact } from '../service/contactService';

export const useContact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const success = await submitContact(formData);
      if (success) {
        alert('Message sent!');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (err) {
      setError('Failed to send message.');
    } finally {
      setLoading(false);
    }
  };

  return { formData, handleChange, handleSubmit, loading, error };
};
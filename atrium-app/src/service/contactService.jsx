// Controller: Mock API for contact form
export const submitContact = async (data) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Submitted:', data);
  return true;
};
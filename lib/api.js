export const sendContactForm = async (data) => {
  await fetch('/api/hello', {
    method: "POST",
    body: JSON.stringify(data)
  })
}

// export const sendContactForm = () => {
//   console.log('HERE'); 
// }
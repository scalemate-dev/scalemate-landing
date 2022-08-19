export const sendForm = (event) => {
  const data = new FormData(event.target);

  return fetch('https://formspree.io/f/mzbwblen', {
    method: 'POST',
    body: data,
    headers: {'Accept': 'application/json' }
  })
}

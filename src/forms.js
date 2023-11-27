// export const sendForm = (event) => {
//   const data = new FormData(event.target);

//   // return fetch('https://formspree.io/f/mzbwblen', { // chunkey95@gmail.com
//   // return fetch('https://formspree.io/f/xgejjkjj', { // info@scalemate.co
//   return fetch('https://submit-form.com/S3mkBrhnv', {
//     method: 'POST',
//     body: data,
//     headers: {'Accept': 'application/json' }
//   })
// }


export const sendForm = (data) => {
  // uncomment to fake loading
  // return new Promise(res => {
  //   setTimeout(() => res(data), 1000)
  // })

  return fetch('https://submit-form.com/S3mkBrhnv', { // info@scalemate.co oauth
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json",
    }
  })
}

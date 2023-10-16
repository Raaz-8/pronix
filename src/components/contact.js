import React from 'react'
import emailjs, { send } from 'emailjs-com'
import { useRef } from 'react';


const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('pronix_solutions', 'template_1ofoclh', form.current, 'Zj42TGNKN51DYXQjh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-white text-amber-600"
    >
      <h1 className="text-5xl py-8 px-12 font-bold tracking-wide text-amber-600">Contact</h1>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-32 w-full"></div>

      <div className="relative p-5 lg:px-20 flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 p-5 md:px-0 mx-5">
          <div className="bg-amber-100 border border-amber-600 w-full lg:w-1/2 h-full p-5 pt-8">
            <h3 className="text-2xl font-semibold mb-5">My Social Media</h3>

            <div className="flex flex-col gap-3">
              <a
                href="https://twitter.com/PrachiKo_"
                className="flex items-center hover:text-white hover:bg-amber-500 p-2" target='_blank'
              >
                <svg
                  fill="currentColor"
                  className="w-6 h-6 m-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
                Twitter
              </a>
              <a
                href="http://www.linkedin.com/in/pronix-solutions1508"
                className="flex items-center hover:text-white hover:bg-amber-500 p-2" target='_blank'
              >
                <svg
                  fill="currentColor"
                  className="w-6 h-6 m-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M 21.800781 0 L 2.199219 0 C 1 0 0 1 0 2.199219 L 0 21.800781 C 0 23 1 24 2.199219 24 L 21.800781 24 C 23 24 24 23 24 21.800781 L 24 2.199219 C 24 1 23 0 21.800781 0 Z M 7 20 L 3 20 L 3 9 L 7 9 Z M 5 7.699219 C 3.800781 7.699219 3 6.898438 3 5.898438 C 3 4.800781 3.800781 4 5 4 C 6.199219 4 7 4.800781 7 5.800781 C 7 6.898438 6.199219 7.699219 5 7.699219 Z M 21 20 L 17 20 L 17 14 C 17 12.398438 15.898438 12 15.601563 12 C 15.300781 12 14 12.199219 14 14 C 14 14.199219 14 20 14 20 L 10 20 L 10 9 L 14 9 L 14 10.601563 C 14.601563 9.699219 15.601563 9 17.5 9 C 19.398438 9 21 10.5 21 14 Z" />
                </svg>
                Linkedin
              </a>
              <a
                href="https://instagram.com/pronix_solutions"
                className="flex items-center hover:text-white hover:bg-amber-500 p-2" target='_blank'
              >
                <svg
                  fill="currentColor"
                  className="w-6 h-6 m-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
                Instagram
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61551213446355&mibextid=ZbWKwL"
                className="flex items-center hover:text-white hover:bg-amber-500 p-2" target='_blank'
              >
                <svg
                  fill="currentColor"
                  className="w-6 h-6 m-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12,0C5.373,0,0,5.373,0,12c0,6.016,4.432,10.984,10.206,11.852V15.18H7.237v-3.154h2.969V9.927c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L16.73,15.18h-3.106v8.697 C19.481,23.083,24,18.075,24,12C24,5.373,18.627,0,12,0z" />
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>

        <form
          ref={form} onSubmit={sendEmail}
          className="w-full md:w-1/2 border border-orange-500 p-6 bg-amber-100"
        >
          <h2 className="text-2xl pb-3 font-semibold">Send Message</h2>
          <div>
            <div className="flex flex-col mb-3">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name='name'
                className="px-3 py-2 bg-white-800 border-b-4 border-indigo-500 focus:border-amber-500 focus:outline-none focus:bg-white focus:text-amber-500 "
                autocomplete="off"  required
              />
            </div>
            <div className="flex flex-col mb-3">
              <label for="email">Email</label>
              <input
                type="text"
                id="email"
                name='email'
                className="px-3 py-2 border border-amber-900 focus:border-amber-500 focus:outline-none focus:bg-white focus:text-amber-500"
                autocomplete="off" required
              />
            </div>
            <div className="flex flex-col mb-3">
              <label for="message">Message</label>
              <textarea
                rows="4"
                id="message"
                name='message'
                className="px-3 py-2 border border-amber-900 focus:border-amber-500 focus:outline-none focus:bg-white focus:text-amber-500 resize-none" required
              ></textarea>
            </div>
          </div>
          <div className="w-full pt-3">
            <button
              type="submit"
              className="w-full border border-amber-900 focus:border-amber-500 bg-white font-semibold focus:outline-none focus:bg-white focus:text-amber-500 hover:text-white hover:bg-amber-500 text-xl cursor-pointer py-3"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact
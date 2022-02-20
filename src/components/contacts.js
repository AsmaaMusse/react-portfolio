import React from "react";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import "../App.css";

// const SERVICE_ID = "service_9ssihkh",
// const TEMPLATE_ID = "template_hy4uhzm",
// const USER_ID = "",

export default function Contacts() {
  // return (
  //   <section role="form" class="php-email-form" id="contact-form">
  //     <div class="form-row">
  //       <div class="form-group col-md-6">
  //         <label for="name">Name:</label>
  //         <input
  //           type="text"
  //           name="user_name"
  //           class="form-control"
  //           id="name"
  //           data-rule="minlen:4"
  //           data-msg="Please enter at least 3 characters"
  //         />
  //         <div class="validate"></div>
  //       </div>
  //       <br />
  //       <div class="form-group col-md-6">
  //         <label for="name">Enter your email below:</label>
  //         <input
  //           type="email"
  //           name="email"
  //           class="form-control"
  //           id="email"
  //           data-rule="email"
  //           data-msg="Please enter a valid email"
  //         />
  //         <div class="validate"></div>
  //       </div>
  //     </div>
  //     <br />
  //     <div class="form-group">
  //       <label for="name">Message</label>
  //       <textarea
  //         class="form-control"
  //         name="message"
  //         rows="10"
  //         id="message"
  //         data-rule="required"
  //         data-msg="Message:"
  //       ></textarea>
  //       <div class="validate"></div>
  //     </div>
  //     <div class="mb-3">
  //       <div class="loading">Loading</div>
  //     </div>
  //     <div class="text-center">
  //       <button id="sendButton" onclick="sendMail()" value="Send" type="submit">
  //         Send Message
  //       </button>
  //     </div>
  //   </section>
  // );

  <form class="w-full max-w-lg">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          First Name
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          placeholder="Jane"
        />
        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-last-name"
        >
          Last Name
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-last-name"
          type="text"
          placeholder="Doe"
        />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-password"
        >
          E-mail
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="email"
          type="email"
        />
        <p class="text-gray-600 text-xs italic">
          Some tips - as long as needed
        </p>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-password"
        >
          Message
        </label>
        <textarea
          class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
          id="message"
        ></textarea>
        <p class="text-gray-600 text-xs italic">
          Re-size can be disabled by set by resize-none / resize-y / resize-x /
          resize
        </p>
      </div>
    </div>
    <div class="md:flex md:items-center">
      <div class="md:w-1/3">
        <button
          class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="button"
        >
          Send
        </button>
      </div>
      <div class="md:w-2/3"></div>
    </div>
  </form>;
}

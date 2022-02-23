import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Socials() {
  return (
    <div class="socials" id="socials">
      <div>
        <a
          href="https://github.com/AsmaaMusse"
          class="social"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon="fa-brands fa-github" />
        </a>
      </div>

      <div>
        <a
          href="https://www.linkedin.com/in/asmaa-m-63994019b/"
          class="social"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon="fa-brands fa-linkedin" />
        </a>
      </div>
    </div>
  );
}

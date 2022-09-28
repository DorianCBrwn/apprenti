<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
[![Twitter][twitter-shield]][twitter-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/DorianCBrwn/apprenti">
    <img src="static/apprenti.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Manage your expenses and repairs!</h3>

  <p align="center">
    <br />
    <a href="https://github.com/DorianCBrwn/apprenti"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <!-- Update live demo link -->
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    <a href="https://github.com/DorianCBrwn/apprenti/issues">Report Bug</a>
    ·
    <a href="https://github.com/DorianCBrwn/apprenti/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Svelte][svelte.dev]][svelte-url]
- [![Mongo][mongodb]][mongodb-url]
- [![Socket][socket.io]][socketio-url]
- [![Tailwind][tailwindcss]][tailwindcss-url]
- [![Vercel][vercel]][vercel-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- pnpm

  ```sh

  pnpm install npm@latest -g
  ```

### Installation

1. Get a free Cloudinary API Key at [https://cloudinary.com](https://cloudinary.com)
2. Clone the repo

```sh
  git clone https://github.com/DorianCBrwn/apprenti.git
```

3. Install NPM packages

```sh
   pnpm install
```

4. Import socket in `svelte.config.js`

```js
// Import Socket from Socket.IO
import { Server } from 'socket.io';
```

5. Create webSocket Server

```js
// Socket Plugin Configuration
export const webSocketServer = {
	name: 'webSocketServer',
	configureServer(server) {
		const io = new Server(server.httpServer);

		io.on('connect', (socket) => {
			socket.emit('eventFromServer', 'Hello World');
		});
	}
};
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Optimizations -->

## Optimizations

The following are features I would love to implement if I had more time to work on this project.

- [ ] Authentication
- [ ] Export Expenses to CSV
- [ ] Data visualizations

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Dorian Brown - [@DorianCBrwn](https://twitter.com/@DorianCBrwn) - [me@dorianb.dev](mailto:me@dorianb.dev)

Project Link: [https://github.com/github_username/repo_name](https://github.com/github_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[forks-shield]: https://img.shields.io/github/forks/DorianCBrwn/Apprenti?color=%230492c2&style=for-the-badge
[forks-url]: https://github.com/DorianCBrwn/apprenti/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/DorianCBrwn/apprenti/stargazers
[license-shield]: https://img.shields.io/github/license/DorianCBrwn/Apprenti?style=for-the-badge
[license-url]: https://github.com/DorianCBrwn/apprenti/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/dorian-brown-dev/
[twitter-shield]: https://img.shields.io/twitter/url?label=Twitter&logo=twitter&style=for-the-badge&url=https%3A%2F%2Ftwitter.com%2FDorianCBrwn
[twitter-url]: https://twitter.com/DorianCBrwn
[svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[svelte-url]: https://svelte.dev/
[mongodb]: https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white
[mongodb-url]: https://mongodb.com
[socket.io]: https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101
[socketio-url]: https://socket.io/
[tailwindcss]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[tailwindcss-url]: https://socket.io/
[vercel]: https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white
[vercel-url]: https://vercel.com/dashboard

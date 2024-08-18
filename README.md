<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">MMM-Gmail</h3>

  <p align="center">
  a magic mirror module that uses google's new OAuth2 to access emails from Gmail and display them on the mirror.
    <br />
    <a href="https://github.com/MagicMirrorOrg/MagicMirror"><strong>Magic Mirror docs »</strong></a>
    <br />
  </p>
</div>
  
  
  <img src="Screenshot 2024-08-17 200749.png" alt="MMM-Gmail Screenshot" width="80%" />


<!-- GETTING STARTED -->
# Getting Started

First you will have to setup a project on google cloud console using the email that you want to display on your mirror


## Google Cloud Project Creation and Gmail API Enablement

This guide will walk you through creating a new Google Cloud project and enabling the Gmail API. These steps are essential if you want to access Gmail programmatically using OAuth 2.0.

## Prerequisites

- A Google account.

## Step 1: Create a New Google Cloud Project

1. **Sign in to Google Cloud Console**
   - Go to [Google Cloud Console](https://console.cloud.google.com/).
   - Sign in with your Google account.

2. **Create a New Project**
   - Click on the project dropdown in the top navigation bar.
   - Select **New Project**.
   - Enter your project's name.
     - Optionally, select an organization (if you're part of one).
   - Click **Create**.

3. **Wait for Project Creation**
   - The project may take a few moments to be created.
   - Once created, you will be redirected to the dashboard for the new project.

## Step 2: Enable the Gmail API

1. **Navigate to the API & Services Dashboard**
   - From the left sidebar, go to **APIs & Services** > **Library**.

2. **Search for the Gmail API**
   - In the API library, use the search bar to search for "Gmail API."
   - Click on the **Gmail API** result.

3. **Enable the Gmail API**
   - On the Gmail API page, click the **Enable** button.
   - You will be redirected to the Gmail API dashboard for your project.

## Step 3: Create OAuth 2.0 Credentials

1. **Navigate to Credentials**
   - From the left sidebar, go to **APIs & Services** > **Credentials**.

2. **Create Credentials**
   - Click on **+ CREATE CREDENTIALS**.
   - Select **OAuth 2.0 Client ID**.

3. **Configure the OAuth Consent Screen**
   - If you haven't already configured the OAuth consent screen, you'll be prompted to do so.
   - Choose between **Internal** or **External** depending on your use case.
   - Fill out the required fields such as **App Name**, **User Support Email**, and **Developer Contact Information**.
   - Click **Save and Continue** until you reach the summary page, then click **Back to Dashboard**.

4. **Create an OAuth Client ID**
   - After configuring the OAuth consent screen, select **Application Type** (e.g., **Web application**).
   - Name your OAuth client (e.g., "Gmail API Client").
   - Enter authorized redirect URIs if required (for web applications).
   - Click **Create**.

5. **Download Credentials**
   - After creation, a dialog will show your **Client ID** and **Client Secret**.
   - Click **Download JSON** to download the credentials file. This file will be used in your application.


## Conclusion

You have successfully created a Google Cloud project and enabled the Gmail API. You can now integrate Gmail into your application using OAuth 2.0.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# Cloning and Installation

1. Navigate into the `modules` folder of Magic Mirror:

2. Clone the repo:
   git clone https://github.com/github_username/repo_name.git

3. Install NPM packages:
   npm install

4. Paste your `credentials.json` file
   - Place the `credentials.json` file that you previously downloaded into the `credentials` folder within the `MMM-Gmail` module directory.
   - The folder structure should look like this:

     MMM-Gmail/
     ├── credentials/
     │   └── credentials.json
     ├── node_helper.js
     ├── MMM-Gmail.js
     └── package.json

<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature

See the [open issues](https://github.com/github_username/repo_name/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Top contributors:

<a href="https://github.com/github_username/repo_name/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=github_username/repo_name" alt="contrib.rocks image" />
</a>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* []()
* []()
* []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 

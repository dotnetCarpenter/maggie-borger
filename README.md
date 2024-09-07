# Site instructions

- [🚀 Project Structure](#-project-structure)
- [How to save changes and deploy the website](#how-to-save-changes-and-deploy-the-website)
- [🖼️ New images for the slider](#️-new-images-for-the-slider)
- [🧞 Commands](#-commands)
- [👀 Want to learn more?](#-want-to-learn-more)


## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── README.md
├── astro.config.mjs
├── dist
    └── [GENERATED WEB SITE IS HERE]
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── favicon.jpg
│   ├── favicon.svg
│   └── js
├── scripts
│   └── createImageImports
└── src
    ├── components
    ├── images
    ├── layouts
    └── pages
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## How to save changes and deploy the website

Whenever you make a change, it needs to be stored in `git` and pushed to the git-server (that's currently github.com).

E.i, I make a change to this file, `README.md` and want to save it for everyone, I have to do three things:

1.  Save the file to disc (usually <kbd>Ctrl</kbd> + <kbd>S</kbd> or <kbd>Command</kbd> + <kbd>S</kbd>).
2.  Add and commit all changes (can be several files) to `git`. <br>`git add [file]` and `git commit -m "[descriptive message]"`
3. Push the changes to the git-server. `git push`.

When you successfully do a `git push` a new version of the website will be generated and
[deployed](https://github.com/dotnetCarpenter/maggie-borger/deployments).

Use `npm run dev` to to see how the new website will look, before you deploy it.

Check out [the command overview table at the bottom](#-commands).


## 🖼️ New images for the slider

Add the new images to `src/images/` and run `scripts/createImageImports`, like so:

```bash
./scripts/createImageImports # notice the beginning dot
```

This will generate `src/components/Images.js` which is responsible for loading all of the images in `src/images/`.
The images will load in the line order of  `Images.js`, but displayed in the order that your browser downloads the image,
which in turn depends on the image size, after Astro have optimised the image, and your network speed.

All images are cached for 1 minute, so re-loads of the main page will display the images in the order given by `Images.js`.
You can manually edit the file but be aware that when running `scripts/createImageImports`, everything will be overwritten.

Remember to add your changes to `git`.

_In the future, a better implementation will be to use
[Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)._

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `git status`              | See what state your local `git` project is in    |
| `git pull`                | Updates your current local working branch with all new commits from the corresponding remote branch on GitHub. |
| `git add [file]`          | Snapshots the file in preparation for versioning |
| `git commit -m "[descriptive message]"` | Records file snapshots permanently in version history |
| `git push`                | Uploads all local branch commits to GitHub       |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Learn some useful `git` commands, visit
[GitHub Training Kit Cheat Sheet](https://training.github.com/downloads/github-git-cheat-sheet/).

Learn how to use Astro, to build websites, feel free to check [the documentation](https://docs.astro.build) or jump into the
Astro [Discord server](https://astro.build/chat).

Check-out non Astro specefic
[`npm` commands with DuckDuckGo](https://duckduckgo.com/?q=npm+commands&t=newext&atb=v397-1&ia=cheatsheet).

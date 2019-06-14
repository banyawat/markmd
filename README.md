# MarkMD

![npm version](https://badge.fury.io/js/markmd.svg)
![NPM](https://img.shields.io/npm/l/markmd.svg)

Node.JS Structured document with markdown to HTML translator

- Mobile Device Responsive
- Folder-Oriented
- Real-time compiler

## Table of Contents

- [MarkMD](#markmd)
  - [Table of Contents](#table-of-contents)
  - [Usage](#usage)
  - [Start](#start)
    - [Folder Structure](#folder-structure)
      - [Example](#example)
      - [Customize configuration](#customize-configuration)
    - [Watching Changes](#watching-changes)

## Usage

Install markmd tools to your project

```bash
npm install markmd --save
```

## Start

To make API document, just call `markmd` (put it in your package scripts)

```bash
npm run markmd
```

### Folder Structure

`README.md` will be your home page. For sub-category, all markdown file should be stored in `docs` folder. All image file should be stored in `docs-img` folder.

#### Example

```text
├─ README.md
├─ /docs
|   ├─ Alpha.md
|   ├─ Bravo.md
|   └─ Charlie.md
└─/docs-img
    └─ foo.jpg
    └─ bar.jpg

```

This will be compiled to HTML structure like this

```text
├─ index
└─ /docs
    ├─ Alpha
    ├─ Bravo
    ├─ Charlie
    └─/docs-img
        ├─ foo.jpg
        └─ bar.jpg
```

#### Customize configuration

Make configuration by create `markmd.json`

```json
{
  "target": "custom-docs",
  "destination": "exported-docs",
  "image": "custom-img"
}
```

Options

| option | description |
|--------|-------------|
| source | Different document folder name, by default is `docs` |
| destination | Different exported folder name, by default is `apidoc` |
| image | Different image folder name, by default is `docs-img` |

### Watching Changes

For real-time compiling, just add `--watch` or `-w` option to the command

```bash
markmd --watch
```

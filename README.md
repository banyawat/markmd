# MarkMD

![npm version](https://badge.fury.io/js/markmd.svg)
![NPM](https://img.shields.io/npm/l/markmd.svg)

Node.JS Structured document with markdown to HTML translator

## Table of Contents

- [MarkMD](#markmd)
  - [Table of Contents](#table-of-contents)
  - [Usage](#usage)
    - [Folder Structure](#folder-structure)
      - [Example](#example)
      - [Customize configuration](#customize-configuration)

## Usage

Install markmd tools to your project

```bash
npm install markmd --save
```

### Folder Structure

`README.md` will be your home page. To make category, you have to create `docs/` folder

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

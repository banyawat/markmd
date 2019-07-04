# MarkMD

![npm version](https://badge.fury.io/js/markmd.svg)
![NPM](https://img.shields.io/npm/l/markmd.svg)

Node.JS Structured document with markdown to HTML translator

- Mobile Device Responsive
- Directory-Oriented
- Real-time compiler

## Table of Contents

- [MarkMD](#MarkMD)
  - [Table of Contents](#Table-of-Contents)
  - [Usage](#Usage)
    - [Start](#Start)
    - [Folder Structure](#Folder-Structure)
      - [Customize configuration](#Customize-configuration)
    - [Versioning](#Versioning)
    - [Watching Changes](#Watching-Changes)

## Usage

Install markmd tools to your project

```bash
npm install markmd --save
```

### Start

To make API document, just call `markmd` (put it in your package scripts)

```bash
npm run markmd
```

### Folder Structure

`README.md` will be your home page. For sub-category, all markdown file should be stored in `docs` folder. All image file should be stored in `docs-img` folder.

Example

```text
├─ README.md
├─ /docs
|   ├─ Alpha.md
|   ├─ Bravo.md
|   └─ Charlie.md
└─ /docs-img
    ├─ foo.jpg
    └─ bar.jpg

```

This will be compiled to static HTML structure like this

```text
├─ index.html
└─ /docs
    ├─ Alpha.html
    ├─ Bravo.thml
    ├─ Charlie.html
    └─ /docs-img
        ├─ foo.jpg
        └─ bar.jpg
```

#### Customize configuration

Make configuration by create `markmd.json`

```json
{
  "source": "custom-docs",
  "destination": "exported-docs",
  "image": "custom-img",
  "version": true
}
```

Options

| option | description | default |
|--------|-------------|---------|
| source | Different document folder name | docs |
| destination | Different exported folder name, by default | apidoc |
| image | Different image folder name |docs-img |
| version | Use version structuring | false |

### Versioning

For multi-version API document, just put `"version": true` into configuration file (described above). Versioning folder should be like this

Example

```text
├─ README.md
└─ /docs
   ├─ /v1
   |  └─ fetch.md
   ├─ /v1.1
   |  ├─ fetch.md
   |  └─ delete.md
   └─ /v2
      └─ migration.md
```

### Watching Changes

For real-time compiling, just add `--watch` or `-w` option to the command

```bash
markmd --watch
```

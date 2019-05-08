# MarkMD

Node.JS Structured document with markdown to HTML translator

## Usage

Install markmd tools to your project

```bash
npm install markmd --save
```

### Table of Contents

- [MarkMD](#markmd)
  - [Usage](#usage)
    - [Table of Contents](#table-of-contents)
      - [Folder Structure](#folder-structure)
        - [Example](#example)
      - [Settings](#settings)

#### Folder Structure

`README.md` will be your home page. To make category, you have to create `docs/` folder

##### Example

```text
├─ README.md
└─ /docs
    ├─ Alpha.md
    ├─ Bravo.md
    └─ Charlie.md

```

This will be compiled to HTML structure like this

```text
├─ index
└─ /docs
    ├─ Alpha
    ├─ Bravo
    └─ Charlie
```

#### Settings

Make configuration by create `markmd.json`

```json
{
  "target": "custom-docs",
  "destination": "exported-docs"
}
```

Options

| option | description |
|--------|-------------|
| target | Different document folder name, by default is `docs` |
| destination | Different exported folder name, by default is `apidoc` |
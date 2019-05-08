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
README.md
├── Alpha.md
├── Bravo.md
└── Charlie.md
```

This will be compiled to HTML structure like this

```text
README
├── Alpha
├── Bravo
└── Charlie
```

#### Settings

Configuration is available by create `markmd.json`

```json
{
  "target": "custom-docs"
}
```

Options

| option | description |
|--------|-------------|
| target | Different document folder name, by default is `docs` |
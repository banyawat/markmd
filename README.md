# markmd

Node.JS Structured document with markdown to HTML translator

## Usage

Install markmd tools to your project

```bash
npm install markmd --save
```

### Index

[Folder Structure](#folder-structure)

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
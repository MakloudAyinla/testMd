# Project Test

This project is a simple React application that demonstrates how to render Markdown content, specifically a changelog, using `react-markdown`.

## Features

- **React-based app**: Built with React to display dynamic content.
- **Markdown rendering**: Supports rendering Markdown files such as changelogs.
- **Custom Markdown styling**: Basic support for Markdown with custom styling.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/MakloudAyinla/testMd.git
   cd testMd
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the application:

   ```bash
   npm run dev
   ```

4. Visit `http://localhost:5173` in your browser.

## Usage

- The application loads a `CHANGELOG.md` file from the `public/` directory and renders it using `react-markdown`.
- Modify the Markdown file and see the changes in real time.

## File Structure

```
/public
   ├── CHANGELOG.md  <-- Markdown file (changelog)
/src
   ├── components
   │   ├── Changelog.js  <-- React component that renders the markdown
   ├── App.js  <-- Main entry point of the application
   ├── index.js  <-- Application entry point
```

## Changelog

See the [CHANGELOG.md](./public/CHANGELOG.md) for detailed updates.

## License

This project is licensed under the MIT License.

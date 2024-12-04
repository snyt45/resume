module.exports = {
  stylesheet: "./pdf-configs/style.css",
  body_class: "markdown-body",
  css: ".page-break { page-break-after: always; }",
  marked_options: {
    headerIds: false,
    smartypants: true,
  },
  pdf_options: {
    format: "A4",
    margin: "20mm 20mm",
    printBackground: true,
    headerTemplate: `
      <style>
        header {
          display: flex;
          justify-content: flex-end;
          font-size: 14px;
          margin: 0 20mm;
          width: 100%;
          font-family: sans-serif;
        }

        footer {
          margin: 0 auto;
          font-size: 14px;
          font-family: sans-serif;
        }
      </style>
      <header>
        <p>更新日：${new Date().toLocaleDateString("ja-JP", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}</p>
      </header>
    `,
    footerTemplate: `
      <footer>
        <p><span class="pageNumber"></span> / <span class="totalPages"></span></p>
      </footer>
    `,
  },
  stylesheet_encoding: "utf-8",
};

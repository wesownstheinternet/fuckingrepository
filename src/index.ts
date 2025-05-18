export default {
  async fetch(request: Request): Promise<Response> {
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Questioning Presence</title>
        <style>
          body {
            background-color: #f4f4f4;
            font-family: Arial, sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
          }
          h1 {
            color: #333;
            font-size: 2em;
          }
        </style>
      </head>
      <body>
        <h1>Erm why are you here</h1>
      </body>
      </html>
    `;

    return new Response(html, {
      headers: {
        'Content-Type': 'text/html; charset=UTF-8',
      },
    });
  },
};

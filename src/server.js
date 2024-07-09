import app from "./app.js";

const PORT = process.env.PORT || 4000;

async function main() {
  const server = app.listen(PORT, () => {
    console.log("App is listening on PORT", PORT);
  });
}

main();

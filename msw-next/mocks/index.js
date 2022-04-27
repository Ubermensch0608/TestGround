if (typeof window === "undefined") {
  const { mswServer } = require("./mswServer");
  mswServer.listen();
} else {
  const { mswWorker } = require("./mswWorker");
  mswWorker.start();
}

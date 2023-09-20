const net = require("node:net");
const readline = require("readline/promises");
const hostIP = "192.168.2.171";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const clearLine = (dir) => {
  return new Promise((resolve, reject) => {
    process.stdout.clearLine(dir, () => {
      resolve();
    });
  });
};

const moveCursor = (dx, dy) => {
  return new Promise((resolve, reject) => {
    process.stdout.moveCursor(dx, dy, () => {
      resolve();
    });
  });
};

const socket = net.createConnection({ host: hostIP, port: 6000 }, async () => {
  const ask = async () => {
    const message = await rl.question("Enter a message > ");
    await moveCursor(0, -1); // move the cursor one line up
    await clearLine(0); // clear the current line where the cursor is in console before writing to socket
    socket.write(message);
  };

  ask();

  socket.on("data", async (data) => {
    console.log(); // log an empty line
    await moveCursor(0, -1);
    await clearLine(0);

    console.log(data.toString("utf-8"));
    ask();
  });
});

socket.on("end", () => console.log("Connection was ended!"));

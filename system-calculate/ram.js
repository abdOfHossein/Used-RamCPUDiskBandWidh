const os = require("os");
function percentUsedRam() {
  const free = os.freemem();
  const total = os.totalmem();
  const percetUsedRam = ((total-free) / total) * 100;

  console.log("percetUsedRam", percetUsedRam);
  console.log(`system used ${total-free} volum from ${total} Ram`);
}

module.exports = percentUsedRam;

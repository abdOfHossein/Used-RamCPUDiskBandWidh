const express = require("express");
const app = express();
const port = 3000;
const percetageUsedCpu = require("./system-calculate/cpu");
const percentUsedRam = require("./system-calculate/ram");
const percetageUsedDisk = require("./system-calculate/disk");
const percentUsedNetworkTraffic = require("./system-calculate/network-traffic");

(async function percentUsed() {
  console.log("#########################  DISK  ########################");
    // you should enter 4 drive in below function
  await percetageUsedDisk();
   console.log("#########################  CPU  ########################");
  percetageUsedCpu();
   console.log("#########################  RAM  ########################");
  percentUsedRam();
  console.log("#########################  NETWORK TRAFFIC  ########################");
  percentUsedNetworkTraffic();

})();

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});

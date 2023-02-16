const os = require("os");

function percentUsedNetworkTraffic() {
  const NetworkBandwidthMonitor = require("node-network-bandwidth-monitor");

  const monitor = new NetworkBandwidthMonitor();
  monitor.registerCallback((data) => {
    console.log("Data received:", data);
  });
  monitor.start();
  monitor.stop();
}

module.exports = percentUsedNetworkTraffic;

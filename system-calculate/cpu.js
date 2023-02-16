const os = require("os");
function percetageUsedCpu() {
  const cpus = os.cpus();
  const cpu = cpus[0];
  console.log('cpu',cpu);
  const total = Object.values(cpu.times).reduce((acc, tv) => acc + tv, 0);
  const usage = process.cpuUsage();
  const currentCPUUsage = usage.user + usage.system;
  const percenUsedCPU = (currentCPUUsage / total) * 100;
  console.log(`system used ${currentCPUUsage} from ${total} CPU`);
  console.log(`percenUsedCPU: ${percenUsedCPU}`);
}

module.exports = percetageUsedCpu;

const checkDiskSpace = require("check-disk-space").default;

const si = require("systeminformation");
async function percetageUsedDisk() {
  const diskSpaceC = await checkDiskSpace("C:/");
  const diskSpaceD = await checkDiskSpace("D:/");
  const diskSpaceE = await checkDiskSpace("E:/");
  const total = diskSpaceC.size + diskSpaceD.size + diskSpaceE.size;
  const free = diskSpaceC.free + diskSpaceD.free + diskSpaceE.free;
  const percentUsedDisk = ((total - free) / total) * 100;
  console.log("diskSpaceC", diskSpaceC);
  console.log("diskSpaceD", diskSpaceD);
  console.log("diskSpaceE", diskSpaceE);
  console.log(`system used ${total - free} from ${total} Disk`);
  console.log("percentUsedDisk", percentUsedDisk);
}

module.exports = percetageUsedDisk;

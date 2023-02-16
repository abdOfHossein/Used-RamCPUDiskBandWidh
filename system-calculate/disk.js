const checkDiskSpace = require("check-disk-space").default;
async function percetageUsedDisk(disk1, disk2, disk3, disk4) {
  const disks = [disk1, disk2, disk3, disk4];
  console.log(disks);
  let diskSpaceC, diskSpaceD, diskSpaceE, diskSpaceG;
  for (const disk of disks) {
    if (disk1 == "C") {
      diskSpaceC = await checkDiskSpace("C:/");
    }
    if (disk2 == "D") {
      diskSpaceD = await checkDiskSpace("D:/");
    }
    if (disk3 == "E") {
      diskSpaceE = await checkDiskSpace("E:/");
    }
    if (disk4 == "G") {
      diskSpaceG = await checkDiskSpace("G:/");
    }
  }
  let total;
  let free;
  if (diskSpaceC) {
    free += diskSpaceC.free;
    total += diskSpaceC.size;
  }
  if (diskSpaceD) {
    free += diskSpaceD.free;
    total += diskSpaceD.size;
  }
  if (diskSpaceE) {
    total += diskSpaceE.size;
    free += diskSpaceE.free;
  }
  if (diskSpaceG) {
    total += diskSpaceG.size;
    free += +diskSpaceG.size;
  }

  const percentUsedDisk = ((total - free) / total) * 100;
  console.log("diskSpaceC", diskSpaceC);
  console.log("diskSpaceD", diskSpaceD);
  console.log("diskSpaceE", diskSpaceE);
  console.log("diskSpaceG", diskSpaceG);
  console.log(`system used ${total - free} from ${total} Disk`);
  console.log("percentUsedDisk", percentUsedDisk);
}

module.exports = percetageUsedDisk;

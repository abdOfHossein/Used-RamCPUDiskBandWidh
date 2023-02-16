const checkDiskSpace = require("check-disk-space").default;
const child = require("child_process");
async function percetageUsedDisk() {
  try {
    child.exec("wmic logicaldisk get name", async (error, stdout) => {
      const Disks = stdout
        .split("\r\r\n")
        .filter((value) => /[A-Za-z]:/.test(value))
        .map((value) => value.trim());

      if (process.platform == "win32") {
        let total = 0,
          free = 0;
        for (const disk of Disks) {
          const valumDisk = await checkDiskSpace(disk);
          if (valumDisk.size != NaN || valumDisk.free) {
            total += valumDisk.size;
            free += valumDisk.free;
          }
        }
        const percentUsedDisk = ((total - free) / total) * 100;
        console.log("Windows ===>");
        console.log(`system used ${total - free} from ${total} Disk`);
        console.log("percentUsedDisk", percentUsedDisk);
      } else if (process.platform == "linux") {
        let total = 0,
          free = 0;
        for (const disk of Disks) {
          const valumDisk = await checkDiskSpace(disk);
          total += valumDisk.size;
          free += valumDisk.free;
        }
        const percentUsedDisk = ((total - free) / total) * 100;
        console.log("Linix ===>");
        console.log("Windows ===>");
        console.log(`system used ${total - free} from ${total} Disk`);
        console.log("percentUsedDisk", percentUsedDisk);
      }
    });
  } catch (e) {
    console.log(e);
  }
}

module.exports = percetageUsedDisk;

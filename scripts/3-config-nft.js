import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x269d374cF17141Cfbf9c731E530Bf580514810b8",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Blunt",
        description: "This Blunt J will give you the desired high to work.",
        image: readFileSync("scripts/assets/Joint_NFT.gif"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()
const fs = require("fs-extra");
fs.readdir("./", async (err, files) => {
    files.forEach(file => {
        console.log(file);
        if ("Body_Lightmap" in file) {
            await fs.rename("./"+file, "./Avatar_Lady_Bow_Yelan_Tex_Body_Lightmap.png")
        }
    });
});
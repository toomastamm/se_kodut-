gpud = [];

function suvaline_number(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

function suvalised_listist(list, protsent) {
    let uus_list = [];
    for (let i=0; i<list.length; i++) {
        let x = Math.random()
        if (x < protsent/100) {
            uus_list.push(list[i])
        }
    }

    return uus_list
}

for (i = 0; i < 50; i++) {
    gpud.push({
        "id": i,
        "nimi": "GTX " + suvaline_number(1,9) + suvaline_number(1,9) + suvaline_number(1, 9) +"0",
        "hind": suvaline_number(100, 5000),
        "pilt": "pildid/gpu.png",

        "specs": {
            "GPU ENGINE SPECS": {
                "CUDA Cores": suvaline_number(1000,3000),
                "Graphics Clock (MHz)": suvaline_number(1000,3000),
                "Processor Clock (MHz)": suvaline_number(1000,3000),
                "Graphics Performance Score": suvaline_number(1000,3000),
            },
            "Memory Specs": {
                "Memory Clock": suvaline_number(1,10) + "10 Gbps",
                "Standard Memory Config": suvaline_number(1,16) + " GB GDDR" + suvaline_number(1,5) + "X",
                "Memory Interface": "GDDR" + suvaline_number(1,5),
                "Memory Interface Width": "256-bit",
},
            "Feature Support": {
                "Bus Support": "PCIe " + suvaline_number(1,3) + ".0",
                "Supported Technologies": suvalised_listist(["SLI", "CUDA", "3D Vision", "PhysX", "NVIDIA G-SYNC™",
                    "GameStream", "ShadowWorks", "DirectX 12", "Virtual Reality", "Ansel", "NVIDIA WhisperMode"], 50),
            },
            "Display Support": {
                "Maximum Digital Resolution": suvaline_number(1, 10000) + "x" + suvaline_number(1, 10000) + "@" + suvaline_number(1, 240) + "Hz",
                "Standard Display Connectors": suvalised_listist(["DP 1.42", "HDMI 2.0b", "DL-DVI"], 50),
            },
            "Standard Graphics Card Dimensions": {
                "Length": suvaline_number(0, 15),
                "Height": suvaline_number(0, 15),
                "Width": suvaline_number(1, 4) + "-slot",
            },
            "Thermal and Power Specs": {
                "Maximum GPU Temperature (in C)": suvaline_number(60, 120),
                "Maximum Graphics Card Power (W)": suvaline_number(20, 500),
                "Minimum System Power Requirement (W)": suvaline_number(500,1000),
                "Supplementary Power Connectors": suvaline_number(4, 8) + "-pin",
            },
        }
    })
}

console.log(gpud)
tooted = [];

function suvaline_number(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

function suvalised_listist(list, protsent) {
    let uus_list = [];
    for (let i = 0; i < list.length; i++) {
        let x = Math.random();
        if (x < protsent / 100) {
            uus_list.push(list[i])
        }
    }

    return uus_list
}

function suvaline_listist(list) {
    return list[suvaline_number(0, list.length)]
}

function gen_ram(id) {
    let gb = suvaline_number(1, 32);
    let ddr = suvaline_number(1, 4);
    let nimi = gb + "GB DDR" + ddr;
    let ram = {
        "id": id,
        "type": "ram",
        "nimi": nimi,
        "hind": suvaline_number(100, 1000),
        "pilt": "pildid/ram.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": suvaline_listist(["SAMSING", "CRUCAL", "RIPEJAW"]),
                "Nimi": nimi,
                "Moodulite arv": suvaline_listist([1, 2, 4, 8]),
            },
            "TEHNIILISED NÄITAJAD": {
                "Maht": gb + "GB",
                "Tüüp": "DDR" + ddr,
                "Voltage": suvaline_listist(["1.2v LOW VOLTAGE", "1.5v"]),
            },
            "ERIMÄRKUSED": {
                "Lisad": suvalised_listist(["Anti-Static band", "Protective plastic", "Bubblewrap", "-10% off coupon"], 40),
            }
        },
    };

    return ram
}

function gen_cpu(id) {
    let nimi = "j" + suvaline_number(1, 9) + "-" + suvaline_number(1000, 9999) + suvalised_listist(["k", "h", "q", "m"], 25);
    let cpu = {
        "id": id,
        "type": "cpu",
        "nimi": nimi,
        "hind": suvaline_number(100, 5000),
        "pilt": "pildid/cpu.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "jntel",
                "Nimi": nimi,
                "Tüüp": nimi.substr(0, 2),
            },
            "TEHINILISED NÄITAJAD": {
                "CPU CLOCK": suvaline_number(10, 36) / 10 + "GHz",
                "CORE COUNT": suvaline_listist([1, 2, 4, 8, 16]),
                "SOCKET": suvaline_number(1000, 9999) + "S",
            },
        },
    };

    return cpu
}

function gen_gpu(id) {
    let gpu = {
        "id": id,
        "type": "gpu",
        "nimi": "GTX " + suvaline_number(1, 9) + suvaline_number(1, 9) + suvaline_number(1, 9) + "0",
        "hind": suvaline_number(100, 5000),
        "pilt": "pildid/gpu.png",

        "specs": {
            "GPU ENGINE SPECS": {
                "CUDA Cores": suvaline_number(1000, 3000),
                "Graphics Clock (MHz)": suvaline_number(1000, 3000),
                "Processor Clock (MHz)": suvaline_number(1000, 3000),
                "Graphics Performance Score": suvaline_number(1000, 3000),
            },
            "Memory Specs": {
                "Memory Clock": suvaline_number(1, 10) + "10 Gbps",
                "Standard Memory Config": suvaline_number(1, 16) + " GB GDDR" + suvaline_number(1, 5) + "X",
                "Memory Interface": "GDDR" + suvaline_number(1, 5),
                "Memory Interface Width": "256-bit",
            },
            "Feature Support": {
                "Bus Support": "PCIe " + suvaline_number(1, 3) + ".0",
                "Supported Technologies": suvalised_listist(["SLI", "KUDA", "3D Vizion", "PhysZ", "MVIDIA G-SYNC™",
                    "GameRiver", "ShadowWorking", "DirectX 12", "VR", "Anseel", "MVIDIA WhisperMode"], 50),
            },
            "Display Support": {
                "Maximum Digital Resolution": suvaline_number(1, 10000) + "x" + suvaline_number(1, 10000) + "@" + suvaline_number(1, 240) + "Hz",
                "Standard Display Connectors": suvalised_listist(["DP 1.42", "HDMI 2.0b", "DL-DVI"], 50),
            },
            "Standard Graphics Card Dimensions": {
                "Length": suvaline_number(1, 15),
                "Height": suvaline_number(1, 15),
                "Width": suvaline_number(1, 4) + "-slot",
            },
            "Thermal and Power Specs": {
                "Maximum GPU Temperature (in C)": suvaline_number(60, 120),
                "Maximum Graphics Card Power (W)": suvaline_number(20, 500),
                "Minimum System Power Requirement (W)": suvaline_number(500, 1000),
                "Supplementary Power Connectors": suvaline_number(4, 8) + "-pin",
            },
        }
    };

    return gpu
}

for (i = 0; i < 100; i++) {
    tooted.push(suvaline_listist([gen_gpu(i), gen_cpu(i), gen_ram((i))]))
}

console.log(tooted);
let tooted = [];

function suvaline_number(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

function suvalised_listist(list, protsent, eraldaja = ', ') {
    let uus_list = [];
    for (let i = 0; i < list.length; i++) {
        let x = Math.random();
        if (x < protsent / 100) {
            uus_list.push(list[i])
        }
    }

    return uus_list.join(eraldaja)
}

function suvaline_listist(list) {
    return list[suvaline_number(0, list.length)]
}

function gen_ram(id) {
    let gb = suvaline_listist([1, 2, 4, 6, 8, 12, 16, 18, 24, 28, 32, 64, 128]);
    let tootja = suvaline_listist(["Kingston", "A-Data", "Crosair", "Crucial", "Dell", "Goodram", "G.SKILL", "Samsung", "Silicon Power"]);
    let ddr = suvaline_number(1, 4);
    let nimi = tootja + " " + gb + "GB DDR" + ddr;
    return {
        "id": id,
        "type": "ram",
        "nimi": nimi,
        "hind": suvaline_number(100, 1000),
        "pilt": "pildid/ram.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": tootja,
                "Nimi": nimi,
                "Moodulite arv": suvaline_listist([1, 2, 4, 8]),
            },
            "TEHNIILISED NÄITAJAD": {
                "Maht": gb + "GB",
                "Tüüp": "DDR" + ddr,
                "Voltage": suvaline_listist(["1.2v LOW VOLTAGE", "1.5v"]),
                "Siini kiirus": suvaline_number(10, 24) * 100 + "MHz",
            },
            "ERIMÄRKUSED": {
                "Lisad": suvalised_listist(["Anti-Static band", "NON-ECC unbuffered", "Heat sink", "EEC", "RGB LED", "Overclock enabled"], 60),
            }
        },
    }
}

function gen_intel_cpu(id) {
    let edition = suvalised_listist(["k", "h", "q", "m"], 25, "");
    let tüüp = "i" + suvaline_listist([3, 5, 7, 9]);
    let mudel = suvaline_number(100, 999)*10;
    let nimi = "Intel " + tüüp + "-" + mudel + edition;
    return {
        "id": id,
        "type": "cpu",
        "nimi": nimi,
        "hind": suvaline_number(300, 2000),
        "pilt": "pildid/cpu.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "intel",
                "Nimi": nimi,
                "Tüüp": tüüp,
                "Mudel": mudel + edition,
            },
            "TEHINILISED NÄITAJAD": {
                "CPU CLOCK": suvaline_number(10, 36) / 10 + "GHz",
                "CORE COUNT": suvaline_listist([1, 2, 4, 8, 16]),
                "SOCKET": suvaline_number(1000, 9999) + "S",
            },
            "ERIMÄRKUSED": {
                "Lisad": suvalised_listist(["Overclockable", "Heat sink", "Hyperthreading", "VT-x", "Speedstep", "AES", "VR READY"], 60),
            }

        },
    }
}

function gen_amd_cpu(id) {
    let edition = suvaline_listist([3, 5, 7]);
    let pro = suvaline_listist(["Pro ", ""]);
    let generation = (suvaline_number(1, 2) * 1000);
    let model = suvaline_number(0, 9) * 100;
    let X = suvaline_listist(["X", ""]);
    let nimi = "AMD Ryzen " + edition + " " + pro + "" + (generation + (model) + X);
    return {
        "id": id,
        "type": "cpu",
        "nimi": nimi,
        "hind": suvaline_number(100, 600),
        "pilt": "pildid/cpu.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "AMD",
                "Nimi": nimi,
                "Tüüp": "Ryzen" + edition,
                "Mudel": (generation + model) + X,
            },
            "TEHINILISED NÄITAJAD": {
                "CPU CLOCK": suvaline_number(10, 36) / 10 + "GHz",
                "CORE COUNT": suvaline_listist([1, 2, 4, 8, 16]),
                "SOCKET": suvaline_number(1000, 9999) + "S",
            },
            "ERIMÄRKUSED": {
                "Lisad": suvalised_listist(["Overclockable", "Heat sink", "SMT", "AES", "AVX2", "FMA3", "VR READY"], 60),
            }

        },
    }
}

function gen_cpu(id) {
    let random = suvaline_listist(["gen_amd_cpu(id)", "gen_intel_cpu(id)"]);
    return eval(random)
}

function gen_gpu(id) {
    return {
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
    }
}

for (let i = 0; i < 100; i++) {
    let random = suvaline_listist(["gen_gpu(i)", "gen_cpu(i)", "gen_ram((i))"]);
    tooted.push(eval(random))
}

console.log(tooted);
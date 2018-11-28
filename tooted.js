const tooted = [
    {
        "id": 0,
        "type": "cpu",
        "nimi": "Intel i3-5780",
        "hind": 1772,
        "pilt": "pildid/cpu.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "intel",
                "Nimi": "Intel i3-5780",
                "Tüüp": "i3",
                "Mudel": "5780"
            },
            "TEHINILISED NÄITAJAD": {
                "CPU CLOCK": "1.2GHz",
                "CORE COUNT": 16,
                "SOCKET": "6129S"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Overclockable, Heat sink, VT-x, Speedstep, AES"
            }
        }
    },
    {
        "id": 1,
        "type": "cpu",
        "nimi": "AMD Ryzen 7 1600",
        "hind": 196,
        "pilt": "pildid/cpu.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "AMD",
                "Nimi": "AMD Ryzen 7 1600",
                "Tüüp": "Ryzen7",
                "Mudel": "1600"
            },
            "TEHINILISED NÄITAJAD": {
                "CPU CLOCK": "2.9GHz",
                "CORE COUNT": 4,
                "SOCKET": "7012S"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Overclockable, Heat sink, SMT, AES, AVX2, VR READY"
            }
        }
    },
    {
        "id": 2,
        "type": "gpu",
        "nimi": "GTX 2750",
        "hind": 2948,
        "pilt": "pildid/gpu.png",
        "specs": {
            "GPU ENGINE SPECS": {
                "CUDA Cores": 1292,
                "Graphics Clock (MHz)": 2819,
                "Processor Clock (MHz)": 2545,
                "Graphics Performance Score": 1988
            },
            "Memory Specs": {
                "Memory Clock": "610 Gbps",
                "Standard Memory Config": "3 GB GDDR3X",
                "Memory Interface": "GDDR1",
                "Memory Interface Width": "256-bit"
            },
            "Feature Support": {
                "Bus Support": "PCIe 2.0",
                "Supported Technologies": "SLI, KUDA, 3D Vizion, MVIDIA G-SYNC™"
            },
            "Display Support": {
                "Maximum Digital Resolution": "6747x2097@159Hz",
                "Standard Display Connectors": "DP 1.42, HDMI 2.0b"
            },
            "Standard Graphics Card Dimensions": {
                "Length": 11,
                "Height": 1,
                "Width": "2-slot"
            },
            "Thermal and Power Specs": {
                "Maximum GPU Temperature (in C)": 87,
                "Maximum Graphics Card Power (W)": 422,
                "Minimum System Power Requirement (W)": 764,
                "Supplementary Power Connectors": "5-pin"
            }
        }
    },
    {
        "id": 3,
        "type": "ram",
        "nimi": "G.SKILL 32GB DDR1",
        "hind": 979,
        "pilt": "pildid/ram.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "G.SKILL",
                "Nimi": "G.SKILL 32GB DDR1",
                "Moodulite arv": 1
            },
            "TEHNIILISED NÄITAJAD": {
                "Maht": "32GB",
                "Tüüp": "DDR1",
                "Voltage": "1.5v",
                "Siini kiirus": "1500MHz"
            },
            "ERIMÄRKUSED": {
                "Lisad": "NON-ECC unbuffered, EEC, RGB LED, Overclock enabled"
            }
        }
    },
    {
        "id": 4,
        "type": "ram",
        "nimi": "Kingston 1GB DDR1",
        "hind": 111,
        "pilt": "pildid/ram.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "Kingston",
                "Nimi": "Kingston 1GB DDR1",
                "Moodulite arv": 8
            },
            "TEHNIILISED NÄITAJAD": {
                "Maht": "1GB",
                "Tüüp": "DDR1",
                "Voltage": "1.5v",
                "Siini kiirus": "2100MHz"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Anti-Static band, RGB LED"
            }
        }
    },
    {
        "id": 5,
        "type": "gpu",
        "nimi": "GTX 7460",
        "hind": 3870,
        "pilt": "pildid/gpu.png",
        "specs": {
            "GPU ENGINE SPECS": {
                "CUDA Cores": 1483,
                "Graphics Clock (MHz)": 2805,
                "Processor Clock (MHz)": 2964,
                "Graphics Performance Score": 1869
            },
            "Memory Specs": {
                "Memory Clock": "310 Gbps",
                "Standard Memory Config": "12 GB GDDR1X",
                "Memory Interface": "GDDR3",
                "Memory Interface Width": "256-bit"
            },
            "Feature Support": {
                "Bus Support": "PCIe 2.0",
                "Supported Technologies": "KUDA, MVIDIA G-SYNC™, ShadowWorking, VR, MVIDIA WhisperMode"
            },
            "Display Support": {
                "Maximum Digital Resolution": "7199x7990@167Hz",
                "Standard Display Connectors": "DP 1.42"
            },
            "Standard Graphics Card Dimensions": {
                "Length": 3,
                "Height": 10,
                "Width": "3-slot"
            },
            "Thermal and Power Specs": {
                "Maximum GPU Temperature (in C)": 106,
                "Maximum Graphics Card Power (W)": 31,
                "Minimum System Power Requirement (W)": 679,
                "Supplementary Power Connectors": "7-pin"
            }
        }
    },
    {
        "id": 6,
        "type": "ram",
        "nimi": "Kingston 18GB DDR1",
        "hind": 469,
        "pilt": "pildid/ram.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "Kingston",
                "Nimi": "Kingston 18GB DDR1",
                "Moodulite arv": 8
            },
            "TEHNIILISED NÄITAJAD": {
                "Maht": "18GB",
                "Tüüp": "DDR1",
                "Voltage": "1.2v LOW VOLTAGE",
                "Siini kiirus": "2100MHz"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Anti-Static band, Heat sink, EEC, Overclock enabled"
            }
        }
    },
    {
        "id": 7,
        "type": "cpu",
        "nimi": "Intel i5-4550",
        "hind": 1895,
        "pilt": "pildid/cpu.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "intel",
                "Nimi": "Intel i5-4550",
                "Tüüp": "i5",
                "Mudel": "4550"
            },
            "TEHINILISED NÄITAJAD": {
                "CPU CLOCK": "2.9GHz",
                "CORE COUNT": 2,
                "SOCKET": "3935S"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Hyperthreading, VT-x, Speedstep"
            }
        }
    },
    {
        "id": 8,
        "type": "ram",
        "nimi": "Silicon Power 24GB DDR1",
        "hind": 278,
        "pilt": "pildid/ram.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "Silicon Power",
                "Nimi": "Silicon Power 24GB DDR1",
                "Moodulite arv": 8
            },
            "TEHNIILISED NÄITAJAD": {
                "Maht": "24GB",
                "Tüüp": "DDR1",
                "Voltage": "1.2v LOW VOLTAGE",
                "Siini kiirus": "2100MHz"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Anti-Static band, NON-ECC unbuffered, EEC, RGB LED"
            }
        }
    },
    {
        "id": 9,
        "type": "ram",
        "nimi": "Silicon Power 24GB DDR1",
        "hind": 159,
        "pilt": "pildid/ram.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "Silicon Power",
                "Nimi": "Silicon Power 24GB DDR1",
                "Moodulite arv": 4
            },
            "TEHNIILISED NÄITAJAD": {
                "Maht": "24GB",
                "Tüüp": "DDR1",
                "Voltage": "1.5v",
                "Siini kiirus": "1900MHz"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Anti-Static band, Heat sink, EEC"
            }
        }
    },
    {
        "id": 10,
        "type": "gpu",
        "nimi": "GTX 6510",
        "hind": 640,
        "pilt": "pildid/gpu.png",
        "specs": {
            "GPU ENGINE SPECS": {
                "CUDA Cores": 1042,
                "Graphics Clock (MHz)": 1632,
                "Processor Clock (MHz)": 2492,
                "Graphics Performance Score": 2646
            },
            "Memory Specs": {
                "Memory Clock": "310 Gbps",
                "Standard Memory Config": "12 GB GDDR3X",
                "Memory Interface": "GDDR2",
                "Memory Interface Width": "256-bit"
            },
            "Feature Support": {
                "Bus Support": "PCIe 2.0",
                "Supported Technologies": "KUDA, GameRiver, ShadowWorking, MVIDIA WhisperMode"
            },
            "Display Support": {
                "Maximum Digital Resolution": "2596x1056@60Hz",
                "Standard Display Connectors": "HDMI 2.0b, DL-DVI"
            },
            "Standard Graphics Card Dimensions": {
                "Length": 2,
                "Height": 5,
                "Width": "3-slot"
            },
            "Thermal and Power Specs": {
                "Maximum GPU Temperature (in C)": 87,
                "Maximum Graphics Card Power (W)": 237,
                "Minimum System Power Requirement (W)": 757,
                "Supplementary Power Connectors": "4-pin"
            }
        }
    },
    {
        "id": 11,
        "type": "ram",
        "nimi": "Kingston 128GB DDR2",
        "hind": 917,
        "pilt": "pildid/ram.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "Kingston",
                "Nimi": "Kingston 128GB DDR2",
                "Moodulite arv": 8
            },
            "TEHNIILISED NÄITAJAD": {
                "Maht": "128GB",
                "Tüüp": "DDR2",
                "Voltage": "1.2v LOW VOLTAGE",
                "Siini kiirus": "1400MHz"
            },
            "ERIMÄRKUSED": {
                "Lisad": "NON-ECC unbuffered, Heat sink"
            }
        }
    },
    {
        "id": 12,
        "type": "ram",
        "nimi": "Goodram 28GB DDR2",
        "hind": 996,
        "pilt": "pildid/ram.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "Goodram",
                "Nimi": "Goodram 28GB DDR2",
                "Moodulite arv": 1
            },
            "TEHNIILISED NÄITAJAD": {
                "Maht": "28GB",
                "Tüüp": "DDR2",
                "Voltage": "1.5v",
                "Siini kiirus": "1300MHz"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Anti-Static band, NON-ECC unbuffered, Heat sink, EEC, Overclock enabled"
            }
        }
    },
    {
        "id": 13,
        "type": "gpu",
        "nimi": "GTX 2450",
        "hind": 1694,
        "pilt": "pildid/gpu.png",
        "specs": {
            "GPU ENGINE SPECS": {
                "CUDA Cores": 2579,
                "Graphics Clock (MHz)": 1525,
                "Processor Clock (MHz)": 1444,
                "Graphics Performance Score": 1729
            },
            "Memory Specs": {
                "Memory Clock": "910 Gbps",
                "Standard Memory Config": "12 GB GDDR4X",
                "Memory Interface": "GDDR2",
                "Memory Interface Width": "256-bit"
            },
            "Feature Support": {
                "Bus Support": "PCIe 2.0",
                "Supported Technologies": "PhysZ, MVIDIA G-SYNC™, GameRiver, MVIDIA WhisperMode"
            },
            "Display Support": {
                "Maximum Digital Resolution": "8627x660@126Hz",
                "Standard Display Connectors": "HDMI 2.0b, DL-DVI"
            },
            "Standard Graphics Card Dimensions": {
                "Length": 10,
                "Height": 7,
                "Width": "1-slot"
            },
            "Thermal and Power Specs": {
                "Maximum GPU Temperature (in C)": 105,
                "Maximum Graphics Card Power (W)": 379,
                "Minimum System Power Requirement (W)": 830,
                "Supplementary Power Connectors": "7-pin"
            }
        }
    },
    {
        "id": 14,
        "type": "gpu",
        "nimi": "GTX 2320",
        "hind": 550,
        "pilt": "pildid/gpu.png",
        "specs": {
            "GPU ENGINE SPECS": {
                "CUDA Cores": 2941,
                "Graphics Clock (MHz)": 1340,
                "Processor Clock (MHz)": 1898,
                "Graphics Performance Score": 2130
            },
            "Memory Specs": {
                "Memory Clock": "710 Gbps",
                "Standard Memory Config": "10 GB GDDR4X",
                "Memory Interface": "GDDR3",
                "Memory Interface Width": "256-bit"
            },
            "Feature Support": {
                "Bus Support": "PCIe 1.0",
                "Supported Technologies": "SLI, 3D Vizion, PhysZ, MVIDIA G-SYNC™, DirectX 12, Anseel"
            },
            "Display Support": {
                "Maximum Digital Resolution": "2845x316@152Hz",
                "Standard Display Connectors": "DL-DVI"
            },
            "Standard Graphics Card Dimensions": {
                "Length": 5,
                "Height": 14,
                "Width": "2-slot"
            },
            "Thermal and Power Specs": {
                "Maximum GPU Temperature (in C)": 72,
                "Maximum Graphics Card Power (W)": 314,
                "Minimum System Power Requirement (W)": 583,
                "Supplementary Power Connectors": "7-pin"
            }
        }
    },
    {
        "id": 15,
        "type": "cpu",
        "nimi": "AMD Ryzen 3 1400",
        "hind": 578,
        "pilt": "pildid/cpu.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "AMD",
                "Nimi": "AMD Ryzen 3 1400",
                "Tüüp": "Ryzen3",
                "Mudel": "1400"
            },
            "TEHINILISED NÄITAJAD": {
                "CPU CLOCK": "1.7GHz",
                "CORE COUNT": 2,
                "SOCKET": "6020S"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Heat sink, AES, VR READY"
            }
        }
    },
    {
        "id": 16,
        "type": "ram",
        "nimi": "Crosair 12GB DDR3",
        "hind": 123,
        "pilt": "pildid/ram.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "Crosair",
                "Nimi": "Crosair 12GB DDR3",
                "Moodulite arv": 2
            },
            "TEHNIILISED NÄITAJAD": {
                "Maht": "12GB",
                "Tüüp": "DDR3",
                "Voltage": "1.2v LOW VOLTAGE",
                "Siini kiirus": "1700MHz"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Heat sink"
            }
        }
    },
    {
        "id": 17,
        "type": "gpu",
        "nimi": "GTX 1180",
        "hind": 1072,
        "pilt": "pildid/gpu.png",
        "specs": {
            "GPU ENGINE SPECS": {
                "CUDA Cores": 2670,
                "Graphics Clock (MHz)": 1200,
                "Processor Clock (MHz)": 2853,
                "Graphics Performance Score": 1583
            },
            "Memory Specs": {
                "Memory Clock": "210 Gbps",
                "Standard Memory Config": "7 GB GDDR4X",
                "Memory Interface": "GDDR2",
                "Memory Interface Width": "256-bit"
            },
            "Feature Support": {
                "Bus Support": "PCIe 1.0",
                "Supported Technologies": "KUDA, 3D Vizion, PhysZ, ShadowWorking, DirectX 12, MVIDIA WhisperMode"
            },
            "Display Support": {
                "Maximum Digital Resolution": "259x1193@90Hz",
                "Standard Display Connectors": "DL-DVI"
            },
            "Standard Graphics Card Dimensions": {
                "Length": 12,
                "Height": 7,
                "Width": "2-slot"
            },
            "Thermal and Power Specs": {
                "Maximum GPU Temperature (in C)": 79,
                "Maximum Graphics Card Power (W)": 407,
                "Minimum System Power Requirement (W)": 645,
                "Supplementary Power Connectors": "5-pin"
            }
        }
    },
    {
        "id": 18,
        "type": "ram",
        "nimi": "Kingston 28GB DDR1",
        "hind": 333,
        "pilt": "pildid/ram.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "Kingston",
                "Nimi": "Kingston 28GB DDR1",
                "Moodulite arv": 8
            },
            "TEHNIILISED NÄITAJAD": {
                "Maht": "28GB",
                "Tüüp": "DDR1",
                "Voltage": "1.5v",
                "Siini kiirus": "1700MHz"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Heat sink, EEC"
            }
        }
    },
    {
        "id": 19,
        "type": "ram",
        "nimi": "Crucial 12GB DDR3",
        "hind": 615,
        "pilt": "pildid/ram.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "Crucial",
                "Nimi": "Crucial 12GB DDR3",
                "Moodulite arv": 4
            },
            "TEHNIILISED NÄITAJAD": {
                "Maht": "12GB",
                "Tüüp": "DDR3",
                "Voltage": "1.5v",
                "Siini kiirus": "1400MHz"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Anti-Static band, NON-ECC unbuffered, EEC, RGB LED, Overclock enabled"
            }
        }
    },
    {
        "id": 20,
        "type": "ram",
        "nimi": "Dell 4GB DDR1",
        "hind": 722,
        "pilt": "pildid/ram.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "Dell",
                "Nimi": "Dell 4GB DDR1",
                "Moodulite arv": 8
            },
            "TEHNIILISED NÄITAJAD": {
                "Maht": "4GB",
                "Tüüp": "DDR1",
                "Voltage": "1.5v",
                "Siini kiirus": "1900MHz"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Anti-Static band, NON-ECC unbuffered, EEC, Overclock enabled"
            }
        }
    },
    {
        "id": 21,
        "type": "cpu",
        "nimi": "Intel i9-9670hm",
        "hind": 786,
        "pilt": "pildid/cpu.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "intel",
                "Nimi": "Intel i9-9670hm",
                "Tüüp": "i9",
                "Mudel": "9670hm"
            },
            "TEHINILISED NÄITAJAD": {
                "CPU CLOCK": "3.2GHz",
                "CORE COUNT": 2,
                "SOCKET": "2888S"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Overclockable, Heat sink, Hyperthreading, Speedstep, AES"
            }
        }
    },
    {
        "id": 22,
        "type": "gpu",
        "nimi": "GTX 1140",
        "hind": 3793,
        "pilt": "pildid/gpu.png",
        "specs": {
            "GPU ENGINE SPECS": {
                "CUDA Cores": 2981,
                "Graphics Clock (MHz)": 1531,
                "Processor Clock (MHz)": 1891,
                "Graphics Performance Score": 1006
            },
            "Memory Specs": {
                "Memory Clock": "210 Gbps",
                "Standard Memory Config": "12 GB GDDR3X",
                "Memory Interface": "GDDR2",
                "Memory Interface Width": "256-bit"
            },
            "Feature Support": {
                "Bus Support": "PCIe 1.0",
                "Supported Technologies": "SLI, KUDA"
            },
            "Display Support": {
                "Maximum Digital Resolution": "2848x6291@202Hz",
                "Standard Display Connectors": "HDMI 2.0b, DL-DVI"
            },
            "Standard Graphics Card Dimensions": {
                "Length": 2,
                "Height": 10,
                "Width": "1-slot"
            },
            "Thermal and Power Specs": {
                "Maximum GPU Temperature (in C)": 90,
                "Maximum Graphics Card Power (W)": 418,
                "Minimum System Power Requirement (W)": 561,
                "Supplementary Power Connectors": "7-pin"
            }
        }
    },
    {
        "id": 23,
        "type": "gpu",
        "nimi": "GTX 6850",
        "hind": 864,
        "pilt": "pildid/gpu.png",
        "specs": {
            "GPU ENGINE SPECS": {
                "CUDA Cores": 1281,
                "Graphics Clock (MHz)": 1030,
                "Processor Clock (MHz)": 1898,
                "Graphics Performance Score": 2041
            },
            "Memory Specs": {
                "Memory Clock": "710 Gbps",
                "Standard Memory Config": "5 GB GDDR2X",
                "Memory Interface": "GDDR2",
                "Memory Interface Width": "256-bit"
            },
            "Feature Support": {
                "Bus Support": "PCIe 2.0",
                "Supported Technologies": "SLI, 3D Vizion, PhysZ, Anseel"
            },
            "Display Support": {
                "Maximum Digital Resolution": "5244x8835@178Hz",
                "Standard Display Connectors": "DL-DVI"
            },
            "Standard Graphics Card Dimensions": {
                "Length": 13,
                "Height": 9,
                "Width": "3-slot"
            },
            "Thermal and Power Specs": {
                "Maximum GPU Temperature (in C)": 82,
                "Maximum Graphics Card Power (W)": 475,
                "Minimum System Power Requirement (W)": 887,
                "Supplementary Power Connectors": "5-pin"
            }
        }
    },
    {
        "id": 24,
        "type": "cpu",
        "nimi": "AMD Ryzen 7 1300X",
        "hind": 411,
        "pilt": "pildid/cpu.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "AMD",
                "Nimi": "AMD Ryzen 7 1300X",
                "Tüüp": "Ryzen7",
                "Mudel": "1300X"
            },
            "TEHINILISED NÄITAJAD": {
                "CPU CLOCK": "1.4GHz",
                "CORE COUNT": 8,
                "SOCKET": "9870S"
            },
            "ERIMÄRKUSED": {
                "Lisad": "SMT, AES, AVX2, FMA3, VR READY"
            }
        }
    },
    {
        "id": 25,
        "type": "cpu",
        "nimi": "AMD Ryzen 3 Pro 1500",
        "hind": 323,
        "pilt": "pildid/cpu.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "AMD",
                "Nimi": "AMD Ryzen 3 Pro 1500",
                "Tüüp": "Ryzen3",
                "Mudel": "1500"
            },
            "TEHINILISED NÄITAJAD": {
                "CPU CLOCK": "3GHz",
                "CORE COUNT": 1,
                "SOCKET": "4931S"
            },
            "ERIMÄRKUSED": {
                "Lisad": "SMT, AES, AVX2, FMA3, VR READY"
            }
        }
    },
    {
        "id": 26,
        "type": "cpu",
        "nimi": "Intel i9-7690m",
        "hind": 1915,
        "pilt": "pildid/cpu.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "intel",
                "Nimi": "Intel i9-7690m",
                "Tüüp": "i9",
                "Mudel": "7690m"
            },
            "TEHINILISED NÄITAJAD": {
                "CPU CLOCK": "2.1GHz",
                "CORE COUNT": 4,
                "SOCKET": "5712S"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Overclockable, Hyperthreading, VT-x, AES, VR READY"
            }
        }
    },
    {
        "id": 27,
        "type": "gpu",
        "nimi": "GTX 6760",
        "hind": 116,
        "pilt": "pildid/gpu.png",
        "specs": {
            "GPU ENGINE SPECS": {
                "CUDA Cores": 1749,
                "Graphics Clock (MHz)": 2052,
                "Processor Clock (MHz)": 1170,
                "Graphics Performance Score": 1914
            },
            "Memory Specs": {
                "Memory Clock": "610 Gbps",
                "Standard Memory Config": "4 GB GDDR1X",
                "Memory Interface": "GDDR4",
                "Memory Interface Width": "256-bit"
            },
            "Feature Support": {
                "Bus Support": "PCIe 2.0",
                "Supported Technologies": "SLI, KUDA, 3D Vizion, GameRiver, ShadowWorking, DirectX 12, VR, Anseel, MVIDIA WhisperMode"
            },
            "Display Support": {
                "Maximum Digital Resolution": "1665x7111@123Hz",
                "Standard Display Connectors": "DL-DVI"
            },
            "Standard Graphics Card Dimensions": {
                "Length": 7,
                "Height": 3,
                "Width": "3-slot"
            },
            "Thermal and Power Specs": {
                "Maximum GPU Temperature (in C)": 66,
                "Maximum Graphics Card Power (W)": 158,
                "Minimum System Power Requirement (W)": 958,
                "Supplementary Power Connectors": "5-pin"
            }
        }
    },
    {
        "id": 28,
        "type": "gpu",
        "nimi": "GTX 7140",
        "hind": 1100,
        "pilt": "pildid/gpu.png",
        "specs": {
            "GPU ENGINE SPECS": {
                "CUDA Cores": 1548,
                "Graphics Clock (MHz)": 1758,
                "Processor Clock (MHz)": 2910,
                "Graphics Performance Score": 2032
            },
            "Memory Specs": {
                "Memory Clock": "710 Gbps",
                "Standard Memory Config": "13 GB GDDR2X",
                "Memory Interface": "GDDR1",
                "Memory Interface Width": "256-bit"
            },
            "Feature Support": {
                "Bus Support": "PCIe 2.0",
                "Supported Technologies": "KUDA, 3D Vizion"
            },
            "Display Support": {
                "Maximum Digital Resolution": "5679x5956@22Hz",
                "Standard Display Connectors": "DL-DVI"
            },
            "Standard Graphics Card Dimensions": {
                "Length": 4,
                "Height": 9,
                "Width": "3-slot"
            },
            "Thermal and Power Specs": {
                "Maximum GPU Temperature (in C)": 109,
                "Maximum Graphics Card Power (W)": 306,
                "Minimum System Power Requirement (W)": 705,
                "Supplementary Power Connectors": "5-pin"
            }
        }
    },
    {
        "id": 29,
        "type": "ram",
        "nimi": "Silicon Power 16GB DDR1",
        "hind": 412,
        "pilt": "pildid/ram.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "Silicon Power",
                "Nimi": "Silicon Power 16GB DDR1",
                "Moodulite arv": 8
            },
            "TEHNIILISED NÄITAJAD": {
                "Maht": "16GB",
                "Tüüp": "DDR1",
                "Voltage": "1.5v",
                "Siini kiirus": "2000MHz"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Anti-Static band, Heat sink, EEC, RGB LED"
            }
        }
    },
    {
        "id": 30,
        "type": "ram",
        "nimi": "A-Data 28GB DDR3",
        "hind": 918,
        "pilt": "pildid/ram.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "A-Data",
                "Nimi": "A-Data 28GB DDR3",
                "Moodulite arv": 4
            },
            "TEHNIILISED NÄITAJAD": {
                "Maht": "28GB",
                "Tüüp": "DDR3",
                "Voltage": "1.2v LOW VOLTAGE",
                "Siini kiirus": "2200MHz"
            },
            "ERIMÄRKUSED": {
                "Lisad": "NON-ECC unbuffered, RGB LED, Overclock enabled"
            }
        }
    },
    {
        "id": 31,
        "type": "gpu",
        "nimi": "GTX 7430",
        "hind": 1319,
        "pilt": "pildid/gpu.png",
        "specs": {
            "GPU ENGINE SPECS": {
                "CUDA Cores": 2029,
                "Graphics Clock (MHz)": 1284,
                "Processor Clock (MHz)": 2718,
                "Graphics Performance Score": 1848
            },
            "Memory Specs": {
                "Memory Clock": "910 Gbps",
                "Standard Memory Config": "3 GB GDDR1X",
                "Memory Interface": "GDDR1",
                "Memory Interface Width": "256-bit"
            },
            "Feature Support": {
                "Bus Support": "PCIe 1.0",
                "Supported Technologies": "SLI, 3D Vizion, PhysZ, MVIDIA G-SYNC™, DirectX 12, MVIDIA WhisperMode"
            },
            "Display Support": {
                "Maximum Digital Resolution": "6961x5440@129Hz",
                "Standard Display Connectors": "HDMI 2.0b"
            },
            "Standard Graphics Card Dimensions": {
                "Length": 2,
                "Height": 9,
                "Width": "2-slot"
            },
            "Thermal and Power Specs": {
                "Maximum GPU Temperature (in C)": 88,
                "Maximum Graphics Card Power (W)": 38,
                "Minimum System Power Requirement (W)": 646,
                "Supplementary Power Connectors": "6-pin"
            }
        }
    },
    {
        "id": 32,
        "type": "cpu",
        "nimi": "AMD Ryzen 7 Pro 1700X",
        "hind": 272,
        "pilt": "pildid/cpu.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "AMD",
                "Nimi": "AMD Ryzen 7 Pro 1700X",
                "Tüüp": "Ryzen7",
                "Mudel": "1700X"
            },
            "TEHINILISED NÄITAJAD": {
                "CPU CLOCK": "1.8GHz",
                "CORE COUNT": 1,
                "SOCKET": "8358S"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Heat sink, AVX2, FMA3"
            }
        }
    },
    {
        "id": 33,
        "type": "ram",
        "nimi": "Crucial 32GB DDR3",
        "hind": 954,
        "pilt": "pildid/ram.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "Crucial",
                "Nimi": "Crucial 32GB DDR3",
                "Moodulite arv": 4
            },
            "TEHNIILISED NÄITAJAD": {
                "Maht": "32GB",
                "Tüüp": "DDR3",
                "Voltage": "1.5v",
                "Siini kiirus": "1900MHz"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Anti-Static band, Heat sink, RGB LED, Overclock enabled"
            }
        }
    },
    {
        "id": 34,
        "type": "ram",
        "nimi": "Samsung 4GB DDR2",
        "hind": 398,
        "pilt": "pildid/ram.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "Samsung",
                "Nimi": "Samsung 4GB DDR2",
                "Moodulite arv": 1
            },
            "TEHNIILISED NÄITAJAD": {
                "Maht": "4GB",
                "Tüüp": "DDR2",
                "Voltage": "1.2v LOW VOLTAGE",
                "Siini kiirus": "1300MHz"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Anti-Static band, NON-ECC unbuffered, Heat sink, EEC, RGB LED, Overclock enabled"
            }
        }
    },
    {
        "id": 35,
        "type": "gpu",
        "nimi": "GTX 3830",
        "hind": 4247,
        "pilt": "pildid/gpu.png",
        "specs": {
            "GPU ENGINE SPECS": {
                "CUDA Cores": 2021,
                "Graphics Clock (MHz)": 2287,
                "Processor Clock (MHz)": 2239,
                "Graphics Performance Score": 1851
            },
            "Memory Specs": {
                "Memory Clock": "210 Gbps",
                "Standard Memory Config": "1 GB GDDR2X",
                "Memory Interface": "GDDR3",
                "Memory Interface Width": "256-bit"
            },
            "Feature Support": {
                "Bus Support": "PCIe 1.0",
                "Supported Technologies": "KUDA, 3D Vizion, MVIDIA G-SYNC™, GameRiver, DirectX 12, MVIDIA WhisperMode"
            },
            "Display Support": {
                "Maximum Digital Resolution": "5787x5172@196Hz",
                "Standard Display Connectors": "HDMI 2.0b"
            },
            "Standard Graphics Card Dimensions": {
                "Length": 1,
                "Height": 10,
                "Width": "3-slot"
            },
            "Thermal and Power Specs": {
                "Maximum GPU Temperature (in C)": 101,
                "Maximum Graphics Card Power (W)": 304,
                "Minimum System Power Requirement (W)": 902,
                "Supplementary Power Connectors": "7-pin"
            }
        }
    },
    {
        "id": 36,
        "type": "ram",
        "nimi": "Crucial 32GB DDR1",
        "hind": 763,
        "pilt": "pildid/ram.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "Crucial",
                "Nimi": "Crucial 32GB DDR1",
                "Moodulite arv": 8
            },
            "TEHNIILISED NÄITAJAD": {
                "Maht": "32GB",
                "Tüüp": "DDR1",
                "Voltage": "1.5v",
                "Siini kiirus": "2200MHz"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Anti-Static band, NON-ECC unbuffered, Heat sink, EEC"
            }
        }
    },
    {
        "id": 37,
        "type": "cpu",
        "nimi": "Intel i3-8580",
        "hind": 1886,
        "pilt": "pildid/cpu.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "intel",
                "Nimi": "Intel i3-8580",
                "Tüüp": "i3",
                "Mudel": "8580"
            },
            "TEHINILISED NÄITAJAD": {
                "CPU CLOCK": "2.5GHz",
                "CORE COUNT": 2,
                "SOCKET": "6879S"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Heat sink, Hyperthreading, Speedstep"
            }
        }
    },
    {
        "id": 38,
        "type": "ram",
        "nimi": "Goodram 24GB DDR2",
        "hind": 348,
        "pilt": "pildid/ram.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "Goodram",
                "Nimi": "Goodram 24GB DDR2",
                "Moodulite arv": 4
            },
            "TEHNIILISED NÄITAJAD": {
                "Maht": "24GB",
                "Tüüp": "DDR2",
                "Voltage": "1.2v LOW VOLTAGE",
                "Siini kiirus": "1500MHz"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Anti-Static band, NON-ECC unbuffered, Heat sink, EEC, Overclock enabled"
            }
        }
    },
    {
        "id": 39,
        "type": "gpu",
        "nimi": "GTX 7340",
        "hind": 552,
        "pilt": "pildid/gpu.png",
        "specs": {
            "GPU ENGINE SPECS": {
                "CUDA Cores": 1948,
                "Graphics Clock (MHz)": 2291,
                "Processor Clock (MHz)": 1514,
                "Graphics Performance Score": 2712
            },
            "Memory Specs": {
                "Memory Clock": "710 Gbps",
                "Standard Memory Config": "6 GB GDDR3X",
                "Memory Interface": "GDDR3",
                "Memory Interface Width": "256-bit"
            },
            "Feature Support": {
                "Bus Support": "PCIe 1.0",
                "Supported Technologies": "KUDA, 3D Vizion, PhysZ, MVIDIA G-SYNC™, GameRiver, ShadowWorking, Anseel"
            },
            "Display Support": {
                "Maximum Digital Resolution": "8818x5109@150Hz",
                "Standard Display Connectors": "DP 1.42, HDMI 2.0b"
            },
            "Standard Graphics Card Dimensions": {
                "Length": 3,
                "Height": 5,
                "Width": "2-slot"
            },
            "Thermal and Power Specs": {
                "Maximum GPU Temperature (in C)": 66,
                "Maximum Graphics Card Power (W)": 186,
                "Minimum System Power Requirement (W)": 974,
                "Supplementary Power Connectors": "4-pin"
            }
        }
    },
    {
        "id": 40,
        "type": "gpu",
        "nimi": "GTX 2860",
        "hind": 4021,
        "pilt": "pildid/gpu.png",
        "specs": {
            "GPU ENGINE SPECS": {
                "CUDA Cores": 2091,
                "Graphics Clock (MHz)": 2913,
                "Processor Clock (MHz)": 1706,
                "Graphics Performance Score": 1426
            },
            "Memory Specs": {
                "Memory Clock": "410 Gbps",
                "Standard Memory Config": "11 GB GDDR1X",
                "Memory Interface": "GDDR3",
                "Memory Interface Width": "256-bit"
            },
            "Feature Support": {
                "Bus Support": "PCIe 1.0",
                "Supported Technologies": "SLI, GameRiver, VR"
            },
            "Display Support": {
                "Maximum Digital Resolution": "6725x1176@191Hz",
                "Standard Display Connectors": "HDMI 2.0b, DL-DVI"
            },
            "Standard Graphics Card Dimensions": {
                "Length": 7,
                "Height": 14,
                "Width": "3-slot"
            },
            "Thermal and Power Specs": {
                "Maximum GPU Temperature (in C)": 60,
                "Maximum Graphics Card Power (W)": 407,
                "Minimum System Power Requirement (W)": 650,
                "Supplementary Power Connectors": "7-pin"
            }
        }
    },
    {
        "id": 41,
        "type": "gpu",
        "nimi": "GTX 6240",
        "hind": 3997,
        "pilt": "pildid/gpu.png",
        "specs": {
            "GPU ENGINE SPECS": {
                "CUDA Cores": 1367,
                "Graphics Clock (MHz)": 1532,
                "Processor Clock (MHz)": 1487,
                "Graphics Performance Score": 2597
            },
            "Memory Specs": {
                "Memory Clock": "310 Gbps",
                "Standard Memory Config": "4 GB GDDR3X",
                "Memory Interface": "GDDR1",
                "Memory Interface Width": "256-bit"
            },
            "Feature Support": {
                "Bus Support": "PCIe 2.0",
                "Supported Technologies": "SLI, 3D Vizion, PhysZ, MVIDIA G-SYNC™, VR, Anseel, MVIDIA WhisperMode"
            },
            "Display Support": {
                "Maximum Digital Resolution": "8253x9930@154Hz",
                "Standard Display Connectors": "HDMI 2.0b"
            },
            "Standard Graphics Card Dimensions": {
                "Length": 11,
                "Height": 10,
                "Width": "3-slot"
            },
            "Thermal and Power Specs": {
                "Maximum GPU Temperature (in C)": 98,
                "Maximum Graphics Card Power (W)": 280,
                "Minimum System Power Requirement (W)": 773,
                "Supplementary Power Connectors": "5-pin"
            }
        }
    },
    {
        "id": 42,
        "type": "gpu",
        "nimi": "GTX 7620",
        "hind": 4449,
        "pilt": "pildid/gpu.png",
        "specs": {
            "GPU ENGINE SPECS": {
                "CUDA Cores": 2964,
                "Graphics Clock (MHz)": 2024,
                "Processor Clock (MHz)": 1328,
                "Graphics Performance Score": 2423
            },
            "Memory Specs": {
                "Memory Clock": "910 Gbps",
                "Standard Memory Config": "15 GB GDDR2X",
                "Memory Interface": "GDDR3",
                "Memory Interface Width": "256-bit"
            },
            "Feature Support": {
                "Bus Support": "PCIe 2.0",
                "Supported Technologies": "3D Vizion, GameRiver, ShadowWorking, Anseel"
            },
            "Display Support": {
                "Maximum Digital Resolution": "4788x5400@172Hz",
                "Standard Display Connectors": "DP 1.42"
            },
            "Standard Graphics Card Dimensions": {
                "Length": 13,
                "Height": 4,
                "Width": "1-slot"
            },
            "Thermal and Power Specs": {
                "Maximum GPU Temperature (in C)": 105,
                "Maximum Graphics Card Power (W)": 127,
                "Minimum System Power Requirement (W)": 649,
                "Supplementary Power Connectors": "6-pin"
            }
        }
    },
    {
        "id": 43,
        "type": "cpu",
        "nimi": "Intel i5-3510h",
        "hind": 345,
        "pilt": "pildid/cpu.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "intel",
                "Nimi": "Intel i5-3510h",
                "Tüüp": "i5",
                "Mudel": "3510h"
            },
            "TEHINILISED NÄITAJAD": {
                "CPU CLOCK": "1GHz",
                "CORE COUNT": 16,
                "SOCKET": "4380S"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Overclockable, Heat sink, Hyperthreading, VT-x, AES, VR READY"
            }
        }
    },
    {
        "id": 44,
        "type": "cpu",
        "nimi": "AMD Ryzen 5 1800X",
        "hind": 453,
        "pilt": "pildid/cpu.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "AMD",
                "Nimi": "AMD Ryzen 5 1800X",
                "Tüüp": "Ryzen5",
                "Mudel": "1800X"
            },
            "TEHINILISED NÄITAJAD": {
                "CPU CLOCK": "1.3GHz",
                "CORE COUNT": 2,
                "SOCKET": "7617S"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Heat sink, AES"
            }
        }
    },
    {
        "id": 45,
        "type": "cpu",
        "nimi": "Intel i7-9150k",
        "hind": 320,
        "pilt": "pildid/cpu.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "intel",
                "Nimi": "Intel i7-9150k",
                "Tüüp": "i7",
                "Mudel": "9150k"
            },
            "TEHINILISED NÄITAJAD": {
                "CPU CLOCK": "2.7GHz",
                "CORE COUNT": 16,
                "SOCKET": "1278S"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Overclockable, Hyperthreading, Speedstep, AES, VR READY"
            }
        }
    },
    {
        "id": 46,
        "type": "ram",
        "nimi": "G.SKILL 18GB DDR3",
        "hind": 133,
        "pilt": "pildid/ram.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "G.SKILL",
                "Nimi": "G.SKILL 18GB DDR3",
                "Moodulite arv": 4
            },
            "TEHNIILISED NÄITAJAD": {
                "Maht": "18GB",
                "Tüüp": "DDR3",
                "Voltage": "1.5v",
                "Siini kiirus": "1600MHz"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Anti-Static band, NON-ECC unbuffered, Heat sink, EEC, RGB LED, Overclock enabled"
            }
        }
    },
    {
        "id": 47,
        "type": "cpu",
        "nimi": "Intel i3-2210h",
        "hind": 562,
        "pilt": "pildid/cpu.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "intel",
                "Nimi": "Intel i3-2210h",
                "Tüüp": "i3",
                "Mudel": "2210h"
            },
            "TEHINILISED NÄITAJAD": {
                "CPU CLOCK": "1.1GHz",
                "CORE COUNT": 4,
                "SOCKET": "6799S"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Heat sink, VT-x, Speedstep, AES, VR READY"
            }
        }
    },
    {
        "id": 48,
        "type": "gpu",
        "nimi": "GTX 5320",
        "hind": 1731,
        "pilt": "pildid/gpu.png",
        "specs": {
            "GPU ENGINE SPECS": {
                "CUDA Cores": 2958,
                "Graphics Clock (MHz)": 1940,
                "Processor Clock (MHz)": 2738,
                "Graphics Performance Score": 2046
            },
            "Memory Specs": {
                "Memory Clock": "610 Gbps",
                "Standard Memory Config": "5 GB GDDR4X",
                "Memory Interface": "GDDR2",
                "Memory Interface Width": "256-bit"
            },
            "Feature Support": {
                "Bus Support": "PCIe 1.0",
                "Supported Technologies": "KUDA, MVIDIA G-SYNC™, VR, MVIDIA WhisperMode"
            },
            "Display Support": {
                "Maximum Digital Resolution": "9765x7392@185Hz",
                "Standard Display Connectors": "HDMI 2.0b, DL-DVI"
            },
            "Standard Graphics Card Dimensions": {
                "Length": 9,
                "Height": 9,
                "Width": "1-slot"
            },
            "Thermal and Power Specs": {
                "Maximum GPU Temperature (in C)": 65,
                "Maximum Graphics Card Power (W)": 406,
                "Minimum System Power Requirement (W)": 771,
                "Supplementary Power Connectors": "7-pin"
            }
        }
    },
    {
        "id": 49,
        "type": "ram",
        "nimi": "Silicon Power 18GB DDR2",
        "hind": 504,
        "pilt": "pildid/ram.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "Silicon Power",
                "Nimi": "Silicon Power 18GB DDR2",
                "Moodulite arv": 8
            },
            "TEHNIILISED NÄITAJAD": {
                "Maht": "18GB",
                "Tüüp": "DDR2",
                "Voltage": "1.5v",
                "Siini kiirus": "1500MHz"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Anti-Static band, NON-ECC unbuffered, RGB LED"
            }
        }
    },
    {
        "id": 50,
        "type": "ram",
        "nimi": "Kingston 12GB DDR3",
        "hind": 937,
        "pilt": "pildid/ram.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "Kingston",
                "Nimi": "Kingston 12GB DDR3",
                "Moodulite arv": 8
            },
            "TEHNIILISED NÄITAJAD": {
                "Maht": "12GB",
                "Tüüp": "DDR3",
                "Voltage": "1.2v LOW VOLTAGE",
                "Siini kiirus": "1900MHz"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Anti-Static band, NON-ECC unbuffered, RGB LED"
            }
        }
    },
    {
        "id": 51,
        "type": "cpu",
        "nimi": "AMD Ryzen 5 Pro 1300",
        "hind": 279,
        "pilt": "pildid/cpu.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "AMD",
                "Nimi": "AMD Ryzen 5 Pro 1300",
                "Tüüp": "Ryzen5",
                "Mudel": "1300"
            },
            "TEHINILISED NÄITAJAD": {
                "CPU CLOCK": "2.6GHz",
                "CORE COUNT": 8,
                "SOCKET": "1893S"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Overclockable, SMT, AES, AVX2, FMA3"
            }
        }
    },
    {
        "id": 52,
        "type": "cpu",
        "nimi": "AMD Ryzen 3 1000X",
        "hind": 343,
        "pilt": "pildid/cpu.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "AMD",
                "Nimi": "AMD Ryzen 3 1000X",
                "Tüüp": "Ryzen3",
                "Mudel": "1000X"
            },
            "TEHINILISED NÄITAJAD": {
                "CPU CLOCK": "3.4GHz",
                "CORE COUNT": 16,
                "SOCKET": "9458S"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Overclockable, SMT, AES, VR READY"
            }
        }
    },
    {
        "id": 53,
        "type": "gpu",
        "nimi": "GTX 2210",
        "hind": 283,
        "pilt": "pildid/gpu.png",
        "specs": {
            "GPU ENGINE SPECS": {
                "CUDA Cores": 2481,
                "Graphics Clock (MHz)": 1964,
                "Processor Clock (MHz)": 2447,
                "Graphics Performance Score": 2647
            },
            "Memory Specs": {
                "Memory Clock": "510 Gbps",
                "Standard Memory Config": "2 GB GDDR1X",
                "Memory Interface": "GDDR4",
                "Memory Interface Width": "256-bit"
            },
            "Feature Support": {
                "Bus Support": "PCIe 2.0",
                "Supported Technologies": "GameRiver, ShadowWorking, Anseel"
            },
            "Display Support": {
                "Maximum Digital Resolution": "4366x6977@48Hz",
                "Standard Display Connectors": "HDMI 2.0b, DL-DVI"
            },
            "Standard Graphics Card Dimensions": {
                "Length": 12,
                "Height": 12,
                "Width": "1-slot"
            },
            "Thermal and Power Specs": {
                "Maximum GPU Temperature (in C)": 64,
                "Maximum Graphics Card Power (W)": 368,
                "Minimum System Power Requirement (W)": 612,
                "Supplementary Power Connectors": "6-pin"
            }
        }
    },
    {
        "id": 54,
        "type": "gpu",
        "nimi": "GTX 7210",
        "hind": 3383,
        "pilt": "pildid/gpu.png",
        "specs": {
            "GPU ENGINE SPECS": {
                "CUDA Cores": 2167,
                "Graphics Clock (MHz)": 1768,
                "Processor Clock (MHz)": 2734,
                "Graphics Performance Score": 2599
            },
            "Memory Specs": {
                "Memory Clock": "610 Gbps",
                "Standard Memory Config": "12 GB GDDR4X",
                "Memory Interface": "GDDR1",
                "Memory Interface Width": "256-bit"
            },
            "Feature Support": {
                "Bus Support": "PCIe 2.0",
                "Supported Technologies": "SLI, 3D Vizion, ShadowWorking, VR, MVIDIA WhisperMode"
            },
            "Display Support": {
                "Maximum Digital Resolution": "6320x1947@8Hz",
                "Standard Display Connectors": "DP 1.42"
            },
            "Standard Graphics Card Dimensions": {
                "Length": 7,
                "Height": 4,
                "Width": "2-slot"
            },
            "Thermal and Power Specs": {
                "Maximum GPU Temperature (in C)": 116,
                "Maximum Graphics Card Power (W)": 444,
                "Minimum System Power Requirement (W)": 864,
                "Supplementary Power Connectors": "7-pin"
            }
        }
    },
    {
        "id": 55,
        "type": "cpu",
        "nimi": "Intel i3-5460h",
        "hind": 1211,
        "pilt": "pildid/cpu.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "intel",
                "Nimi": "Intel i3-5460h",
                "Tüüp": "i3",
                "Mudel": "5460h"
            },
            "TEHINILISED NÄITAJAD": {
                "CPU CLOCK": "3.3GHz",
                "CORE COUNT": 2,
                "SOCKET": "5346S"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Heat sink, Hyperthreading, VT-x, AES, VR READY"
            }
        }
    },
    {
        "id": 56,
        "type": "cpu",
        "nimi": "Intel i3-8280hm",
        "hind": 1084,
        "pilt": "pildid/cpu.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "intel",
                "Nimi": "Intel i3-8280hm",
                "Tüüp": "i3",
                "Mudel": "8280hm"
            },
            "TEHINILISED NÄITAJAD": {
                "CPU CLOCK": "2.4GHz",
                "CORE COUNT": 4,
                "SOCKET": "7776S"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Overclockable, Heat sink, Hyperthreading, VT-x, Speedstep, AES, VR READY"
            }
        }
    },
    {
        "id": 57,
        "type": "cpu",
        "nimi": "Intel i3-2150k",
        "hind": 1531,
        "pilt": "pildid/cpu.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "intel",
                "Nimi": "Intel i3-2150k",
                "Tüüp": "i3",
                "Mudel": "2150k"
            },
            "TEHINILISED NÄITAJAD": {
                "CPU CLOCK": "2.1GHz",
                "CORE COUNT": 2,
                "SOCKET": "1173S"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Overclockable, Heat sink, Speedstep, AES, VR READY"
            }
        }
    },
    {
        "id": 58,
        "type": "cpu",
        "nimi": "Intel i5-6890q",
        "hind": 373,
        "pilt": "pildid/cpu.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "intel",
                "Nimi": "Intel i5-6890q",
                "Tüüp": "i5",
                "Mudel": "6890q"
            },
            "TEHINILISED NÄITAJAD": {
                "CPU CLOCK": "1.8GHz",
                "CORE COUNT": 16,
                "SOCKET": "2785S"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Hyperthreading, VT-x, Speedstep, VR READY"
            }
        }
    },
    {
        "id": 59,
        "type": "gpu",
        "nimi": "GTX 2420",
        "hind": 4400,
        "pilt": "pildid/gpu.png",
        "specs": {
            "GPU ENGINE SPECS": {
                "CUDA Cores": 2151,
                "Graphics Clock (MHz)": 1131,
                "Processor Clock (MHz)": 1420,
                "Graphics Performance Score": 2261
            },
            "Memory Specs": {
                "Memory Clock": "410 Gbps",
                "Standard Memory Config": "1 GB GDDR3X",
                "Memory Interface": "GDDR1",
                "Memory Interface Width": "256-bit"
            },
            "Feature Support": {
                "Bus Support": "PCIe 2.0",
                "Supported Technologies": "SLI, KUDA, 3D Vizion, GameRiver, Anseel"
            },
            "Display Support": {
                "Maximum Digital Resolution": "2420x4013@90Hz",
                "Standard Display Connectors": ""
            },
            "Standard Graphics Card Dimensions": {
                "Length": 6,
                "Height": 12,
                "Width": "1-slot"
            },
            "Thermal and Power Specs": {
                "Maximum GPU Temperature (in C)": 77,
                "Maximum Graphics Card Power (W)": 392,
                "Minimum System Power Requirement (W)": 880,
                "Supplementary Power Connectors": "6-pin"
            }
        }
    },
    {
        "id": 60,
        "type": "ram",
        "nimi": "Crucial 16GB DDR2",
        "hind": 554,
        "pilt": "pildid/ram.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "Crucial",
                "Nimi": "Crucial 16GB DDR2",
                "Moodulite arv": 1
            },
            "TEHNIILISED NÄITAJAD": {
                "Maht": "16GB",
                "Tüüp": "DDR2",
                "Voltage": "1.5v",
                "Siini kiirus": "2100MHz"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Anti-Static band, NON-ECC unbuffered, Heat sink, EEC, RGB LED, Overclock enabled"
            }
        }
    },
    {
        "id": 61,
        "type": "cpu",
        "nimi": "Intel i7-4080kq",
        "hind": 1554,
        "pilt": "pildid/cpu.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "intel",
                "Nimi": "Intel i7-4080kq",
                "Tüüp": "i7",
                "Mudel": "4080kq"
            },
            "TEHINILISED NÄITAJAD": {
                "CPU CLOCK": "1.2GHz",
                "CORE COUNT": 1,
                "SOCKET": "7709S"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Overclockable, Hyperthreading, VT-x"
            }
        }
    },
    {
        "id": 62,
        "type": "gpu",
        "nimi": "GTX 7870",
        "hind": 3723,
        "pilt": "pildid/gpu.png",
        "specs": {
            "GPU ENGINE SPECS": {
                "CUDA Cores": 2251,
                "Graphics Clock (MHz)": 2782,
                "Processor Clock (MHz)": 2182,
                "Graphics Performance Score": 2452
            },
            "Memory Specs": {
                "Memory Clock": "710 Gbps",
                "Standard Memory Config": "8 GB GDDR1X",
                "Memory Interface": "GDDR4",
                "Memory Interface Width": "256-bit"
            },
            "Feature Support": {
                "Bus Support": "PCIe 1.0",
                "Supported Technologies": "KUDA, PhysZ, VR"
            },
            "Display Support": {
                "Maximum Digital Resolution": "2835x1882@149Hz",
                "Standard Display Connectors": "HDMI 2.0b, DL-DVI"
            },
            "Standard Graphics Card Dimensions": {
                "Length": 11,
                "Height": 11,
                "Width": "3-slot"
            },
            "Thermal and Power Specs": {
                "Maximum GPU Temperature (in C)": 116,
                "Maximum Graphics Card Power (W)": 341,
                "Minimum System Power Requirement (W)": 556,
                "Supplementary Power Connectors": "7-pin"
            }
        }
    },
    {
        "id": 63,
        "type": "cpu",
        "nimi": "Intel i9-6080hm",
        "hind": 1376,
        "pilt": "pildid/cpu.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "intel",
                "Nimi": "Intel i9-6080hm",
                "Tüüp": "i9",
                "Mudel": "6080hm"
            },
            "TEHINILISED NÄITAJAD": {
                "CPU CLOCK": "3.3GHz",
                "CORE COUNT": 2,
                "SOCKET": "4081S"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Heat sink, Speedstep, AES, VR READY"
            }
        }
    },
    {
        "id": 64,
        "type": "gpu",
        "nimi": "GTX 5550",
        "hind": 835,
        "pilt": "pildid/gpu.png",
        "specs": {
            "GPU ENGINE SPECS": {
                "CUDA Cores": 1379,
                "Graphics Clock (MHz)": 1527,
                "Processor Clock (MHz)": 2311,
                "Graphics Performance Score": 1451
            },
            "Memory Specs": {
                "Memory Clock": "610 Gbps",
                "Standard Memory Config": "10 GB GDDR2X",
                "Memory Interface": "GDDR2",
                "Memory Interface Width": "256-bit"
            },
            "Feature Support": {
                "Bus Support": "PCIe 2.0",
                "Supported Technologies": "SLI, KUDA, MVIDIA G-SYNC™, GameRiver, VR, Anseel"
            },
            "Display Support": {
                "Maximum Digital Resolution": "9523x8370@211Hz",
                "Standard Display Connectors": "DP 1.42, HDMI 2.0b, DL-DVI"
            },
            "Standard Graphics Card Dimensions": {
                "Length": 4,
                "Height": 14,
                "Width": "3-slot"
            },
            "Thermal and Power Specs": {
                "Maximum GPU Temperature (in C)": 76,
                "Maximum Graphics Card Power (W)": 326,
                "Minimum System Power Requirement (W)": 874,
                "Supplementary Power Connectors": "7-pin"
            }
        }
    },
    {
        "id": 65,
        "type": "cpu",
        "nimi": "AMD Ryzen 5 Pro 1600",
        "hind": 458,
        "pilt": "pildid/cpu.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "AMD",
                "Nimi": "AMD Ryzen 5 Pro 1600",
                "Tüüp": "Ryzen5",
                "Mudel": "1600"
            },
            "TEHINILISED NÄITAJAD": {
                "CPU CLOCK": "2GHz",
                "CORE COUNT": 1,
                "SOCKET": "8302S"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Overclockable, Heat sink, SMT, AES, AVX2, FMA3, VR READY"
            }
        }
    },
    {
        "id": 66,
        "type": "gpu",
        "nimi": "GTX 2830",
        "hind": 4687,
        "pilt": "pildid/gpu.png",
        "specs": {
            "GPU ENGINE SPECS": {
                "CUDA Cores": 2019,
                "Graphics Clock (MHz)": 1940,
                "Processor Clock (MHz)": 1748,
                "Graphics Performance Score": 2845
            },
            "Memory Specs": {
                "Memory Clock": "310 Gbps",
                "Standard Memory Config": "14 GB GDDR3X",
                "Memory Interface": "GDDR2",
                "Memory Interface Width": "256-bit"
            },
            "Feature Support": {
                "Bus Support": "PCIe 1.0",
                "Supported Technologies": "GameRiver, ShadowWorking, DirectX 12"
            },
            "Display Support": {
                "Maximum Digital Resolution": "2999x4111@171Hz",
                "Standard Display Connectors": "DP 1.42, HDMI 2.0b"
            },
            "Standard Graphics Card Dimensions": {
                "Length": 2,
                "Height": 3,
                "Width": "2-slot"
            },
            "Thermal and Power Specs": {
                "Maximum GPU Temperature (in C)": 86,
                "Maximum Graphics Card Power (W)": 413,
                "Minimum System Power Requirement (W)": 887,
                "Supplementary Power Connectors": "7-pin"
            }
        }
    },
    {
        "id": 67,
        "type": "gpu",
        "nimi": "GTX 2760",
        "hind": 3806,
        "pilt": "pildid/gpu.png",
        "specs": {
            "GPU ENGINE SPECS": {
                "CUDA Cores": 1095,
                "Graphics Clock (MHz)": 2473,
                "Processor Clock (MHz)": 2344,
                "Graphics Performance Score": 2493
            },
            "Memory Specs": {
                "Memory Clock": "710 Gbps",
                "Standard Memory Config": "9 GB GDDR4X",
                "Memory Interface": "GDDR2",
                "Memory Interface Width": "256-bit"
            },
            "Feature Support": {
                "Bus Support": "PCIe 1.0",
                "Supported Technologies": "SLI, KUDA, 3D Vizion, MVIDIA G-SYNC™, ShadowWorking, DirectX 12, Anseel"
            },
            "Display Support": {
                "Maximum Digital Resolution": "1082x9596@6Hz",
                "Standard Display Connectors": ""
            },
            "Standard Graphics Card Dimensions": {
                "Length": 3,
                "Height": 8,
                "Width": "3-slot"
            },
            "Thermal and Power Specs": {
                "Maximum GPU Temperature (in C)": 103,
                "Maximum Graphics Card Power (W)": 273,
                "Minimum System Power Requirement (W)": 640,
                "Supplementary Power Connectors": "7-pin"
            }
        }
    },
    {
        "id": 68,
        "type": "cpu",
        "nimi": "Intel i5-6320h",
        "hind": 778,
        "pilt": "pildid/cpu.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "intel",
                "Nimi": "Intel i5-6320h",
                "Tüüp": "i5",
                "Mudel": "6320h"
            },
            "TEHINILISED NÄITAJAD": {
                "CPU CLOCK": "1.1GHz",
                "CORE COUNT": 2,
                "SOCKET": "6984S"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Heat sink, Hyperthreading, VT-x, Speedstep"
            }
        }
    },
    {
        "id": 69,
        "type": "ram",
        "nimi": "Samsung 2GB DDR1",
        "hind": 477,
        "pilt": "pildid/ram.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "Samsung",
                "Nimi": "Samsung 2GB DDR1",
                "Moodulite arv": 8
            },
            "TEHNIILISED NÄITAJAD": {
                "Maht": "2GB",
                "Tüüp": "DDR1",
                "Voltage": "1.5v",
                "Siini kiirus": "1900MHz"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Anti-Static band, NON-ECC unbuffered, Overclock enabled"
            }
        }
    },
    {
        "id": 70,
        "type": "ram",
        "nimi": "Dell 1GB DDR2",
        "hind": 680,
        "pilt": "pildid/ram.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "Dell",
                "Nimi": "Dell 1GB DDR2",
                "Moodulite arv": 8
            },
            "TEHNIILISED NÄITAJAD": {
                "Maht": "1GB",
                "Tüüp": "DDR2",
                "Voltage": "1.2v LOW VOLTAGE",
                "Siini kiirus": "1700MHz"
            },
            "ERIMÄRKUSED": {
                "Lisad": "NON-ECC unbuffered, Heat sink, RGB LED, Overclock enabled"
            }
        }
    },
    {
        "id": 71,
        "type": "cpu",
        "nimi": "Intel i7-6490",
        "hind": 1333,
        "pilt": "pildid/cpu.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "intel",
                "Nimi": "Intel i7-6490",
                "Tüüp": "i7",
                "Mudel": "6490"
            },
            "TEHINILISED NÄITAJAD": {
                "CPU CLOCK": "1.4GHz",
                "CORE COUNT": 4,
                "SOCKET": "4082S"
            },
            "ERIMÄRKUSED": {
                "Lisad": "VT-x, Speedstep, AES"
            }
        }
    },
    {
        "id": 72,
        "type": "gpu",
        "nimi": "GTX 4170",
        "hind": 4414,
        "pilt": "pildid/gpu.png",
        "specs": {
            "GPU ENGINE SPECS": {
                "CUDA Cores": 1502,
                "Graphics Clock (MHz)": 2650,
                "Processor Clock (MHz)": 1050,
                "Graphics Performance Score": 2739
            },
            "Memory Specs": {
                "Memory Clock": "510 Gbps",
                "Standard Memory Config": "1 GB GDDR3X",
                "Memory Interface": "GDDR1",
                "Memory Interface Width": "256-bit"
            },
            "Feature Support": {
                "Bus Support": "PCIe 1.0",
                "Supported Technologies": "SLI, KUDA, 3D Vizion, PhysZ, VR, MVIDIA WhisperMode"
            },
            "Display Support": {
                "Maximum Digital Resolution": "2497x7167@222Hz",
                "Standard Display Connectors": "DP 1.42, HDMI 2.0b, DL-DVI"
            },
            "Standard Graphics Card Dimensions": {
                "Length": 6,
                "Height": 11,
                "Width": "2-slot"
            },
            "Thermal and Power Specs": {
                "Maximum GPU Temperature (in C)": 68,
                "Maximum Graphics Card Power (W)": 325,
                "Minimum System Power Requirement (W)": 958,
                "Supplementary Power Connectors": "7-pin"
            }
        }
    },
    {
        "id": 73,
        "type": "ram",
        "nimi": "G.SKILL 64GB DDR3",
        "hind": 480,
        "pilt": "pildid/ram.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "G.SKILL",
                "Nimi": "G.SKILL 64GB DDR3",
                "Moodulite arv": 1
            },
            "TEHNIILISED NÄITAJAD": {
                "Maht": "64GB",
                "Tüüp": "DDR3",
                "Voltage": "1.2v LOW VOLTAGE",
                "Siini kiirus": "1700MHz"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Anti-Static band, NON-ECC unbuffered, Heat sink, RGB LED"
            }
        }
    },
    {
        "id": 74,
        "type": "gpu",
        "nimi": "GTX 2470",
        "hind": 3781,
        "pilt": "pildid/gpu.png",
        "specs": {
            "GPU ENGINE SPECS": {
                "CUDA Cores": 2547,
                "Graphics Clock (MHz)": 2204,
                "Processor Clock (MHz)": 1881,
                "Graphics Performance Score": 2596
            },
            "Memory Specs": {
                "Memory Clock": "310 Gbps",
                "Standard Memory Config": "5 GB GDDR3X",
                "Memory Interface": "GDDR1",
                "Memory Interface Width": "256-bit"
            },
            "Feature Support": {
                "Bus Support": "PCIe 1.0",
                "Supported Technologies": "3D Vizion, GameRiver, Anseel, MVIDIA WhisperMode"
            },
            "Display Support": {
                "Maximum Digital Resolution": "2516x5535@48Hz",
                "Standard Display Connectors": "DP 1.42, HDMI 2.0b, DL-DVI"
            },
            "Standard Graphics Card Dimensions": {
                "Length": 5,
                "Height": 9,
                "Width": "3-slot"
            },
            "Thermal and Power Specs": {
                "Maximum GPU Temperature (in C)": 119,
                "Maximum Graphics Card Power (W)": 446,
                "Minimum System Power Requirement (W)": 644,
                "Supplementary Power Connectors": "6-pin"
            }
        }
    },
    {
        "id": 75,
        "type": "cpu",
        "nimi": "Intel i9-1630",
        "hind": 1829,
        "pilt": "pildid/cpu.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "intel",
                "Nimi": "Intel i9-1630",
                "Tüüp": "i9",
                "Mudel": "1630"
            },
            "TEHINILISED NÄITAJAD": {
                "CPU CLOCK": "1.8GHz",
                "CORE COUNT": 8,
                "SOCKET": "3844S"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Overclockable, Heat sink, Hyperthreading, Speedstep, AES, VR READY"
            }
        }
    },
    {
        "id": 76,
        "type": "ram",
        "nimi": "Crosair 32GB DDR3",
        "hind": 842,
        "pilt": "pildid/ram.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "Crosair",
                "Nimi": "Crosair 32GB DDR3",
                "Moodulite arv": 4
            },
            "TEHNIILISED NÄITAJAD": {
                "Maht": "32GB",
                "Tüüp": "DDR3",
                "Voltage": "1.2v LOW VOLTAGE",
                "Siini kiirus": "2200MHz"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Anti-Static band, NON-ECC unbuffered, Heat sink, EEC, RGB LED, Overclock enabled"
            }
        }
    },
    {
        "id": 77,
        "type": "ram",
        "nimi": "Kingston 64GB DDR3",
        "hind": 354,
        "pilt": "pildid/ram.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "Kingston",
                "Nimi": "Kingston 64GB DDR3",
                "Moodulite arv": 1
            },
            "TEHNIILISED NÄITAJAD": {
                "Maht": "64GB",
                "Tüüp": "DDR3",
                "Voltage": "1.2v LOW VOLTAGE",
                "Siini kiirus": "1300MHz"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Anti-Static band, Heat sink, RGB LED, Overclock enabled"
            }
        }
    },
    {
        "id": 78,
        "type": "ram",
        "nimi": "G.SKILL 128GB DDR1",
        "hind": 714,
        "pilt": "pildid/ram.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "G.SKILL",
                "Nimi": "G.SKILL 128GB DDR1",
                "Moodulite arv": 1
            },
            "TEHNIILISED NÄITAJAD": {
                "Maht": "128GB",
                "Tüüp": "DDR1",
                "Voltage": "1.2v LOW VOLTAGE",
                "Siini kiirus": "1600MHz"
            },
            "ERIMÄRKUSED": {
                "Lisad": "NON-ECC unbuffered, Heat sink, EEC, Overclock enabled"
            }
        }
    },
    {
        "id": 79,
        "type": "ram",
        "nimi": "Crucial 32GB DDR1",
        "hind": 963,
        "pilt": "pildid/ram.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "Crucial",
                "Nimi": "Crucial 32GB DDR1",
                "Moodulite arv": 1
            },
            "TEHNIILISED NÄITAJAD": {
                "Maht": "32GB",
                "Tüüp": "DDR1",
                "Voltage": "1.2v LOW VOLTAGE",
                "Siini kiirus": "2100MHz"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Heat sink, RGB LED"
            }
        }
    },
    {
        "id": 80,
        "type": "gpu",
        "nimi": "GTX 5570",
        "hind": 974,
        "pilt": "pildid/gpu.png",
        "specs": {
            "GPU ENGINE SPECS": {
                "CUDA Cores": 2859,
                "Graphics Clock (MHz)": 1725,
                "Processor Clock (MHz)": 2490,
                "Graphics Performance Score": 2687
            },
            "Memory Specs": {
                "Memory Clock": "310 Gbps",
                "Standard Memory Config": "10 GB GDDR2X",
                "Memory Interface": "GDDR2",
                "Memory Interface Width": "256-bit"
            },
            "Feature Support": {
                "Bus Support": "PCIe 1.0",
                "Supported Technologies": "SLI, KUDA, MVIDIA G-SYNC™, GameRiver, ShadowWorking, DirectX 12, VR, MVIDIA WhisperMode"
            },
            "Display Support": {
                "Maximum Digital Resolution": "1909x1941@5Hz",
                "Standard Display Connectors": "HDMI 2.0b, DL-DVI"
            },
            "Standard Graphics Card Dimensions": {
                "Length": 12,
                "Height": 13,
                "Width": "2-slot"
            },
            "Thermal and Power Specs": {
                "Maximum GPU Temperature (in C)": 84,
                "Maximum Graphics Card Power (W)": 345,
                "Minimum System Power Requirement (W)": 740,
                "Supplementary Power Connectors": "7-pin"
            }
        }
    },
    {
        "id": 81,
        "type": "gpu",
        "nimi": "GTX 5830",
        "hind": 3927,
        "pilt": "pildid/gpu.png",
        "specs": {
            "GPU ENGINE SPECS": {
                "CUDA Cores": 1704,
                "Graphics Clock (MHz)": 2133,
                "Processor Clock (MHz)": 2750,
                "Graphics Performance Score": 2545
            },
            "Memory Specs": {
                "Memory Clock": "610 Gbps",
                "Standard Memory Config": "2 GB GDDR3X",
                "Memory Interface": "GDDR2",
                "Memory Interface Width": "256-bit"
            },
            "Feature Support": {
                "Bus Support": "PCIe 1.0",
                "Supported Technologies": "SLI, KUDA, GameRiver, DirectX 12, VR, Anseel"
            },
            "Display Support": {
                "Maximum Digital Resolution": "7050x6897@208Hz",
                "Standard Display Connectors": "DP 1.42, HDMI 2.0b"
            },
            "Standard Graphics Card Dimensions": {
                "Length": 2,
                "Height": 10,
                "Width": "2-slot"
            },
            "Thermal and Power Specs": {
                "Maximum GPU Temperature (in C)": 67,
                "Maximum Graphics Card Power (W)": 58,
                "Minimum System Power Requirement (W)": 753,
                "Supplementary Power Connectors": "6-pin"
            }
        }
    },
    {
        "id": 82,
        "type": "ram",
        "nimi": "Silicon Power 64GB DDR2",
        "hind": 467,
        "pilt": "pildid/ram.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "Silicon Power",
                "Nimi": "Silicon Power 64GB DDR2",
                "Moodulite arv": 4
            },
            "TEHNIILISED NÄITAJAD": {
                "Maht": "64GB",
                "Tüüp": "DDR2",
                "Voltage": "1.5v",
                "Siini kiirus": "2200MHz"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Anti-Static band, NON-ECC unbuffered, Heat sink"
            }
        }
    },
    {
        "id": 83,
        "type": "ram",
        "nimi": "Silicon Power 6GB DDR1",
        "hind": 712,
        "pilt": "pildid/ram.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "Silicon Power",
                "Nimi": "Silicon Power 6GB DDR1",
                "Moodulite arv": 2
            },
            "TEHNIILISED NÄITAJAD": {
                "Maht": "6GB",
                "Tüüp": "DDR1",
                "Voltage": "1.2v LOW VOLTAGE",
                "Siini kiirus": "1600MHz"
            },
            "ERIMÄRKUSED": {
                "Lisad": "NON-ECC unbuffered, Heat sink, EEC, Overclock enabled"
            }
        }
    },
    {
        "id": 84,
        "type": "cpu",
        "nimi": "Intel i9-5940khq",
        "hind": 1146,
        "pilt": "pildid/cpu.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "intel",
                "Nimi": "Intel i9-5940khq",
                "Tüüp": "i9",
                "Mudel": "5940khq"
            },
            "TEHINILISED NÄITAJAD": {
                "CPU CLOCK": "1.4GHz",
                "CORE COUNT": 16,
                "SOCKET": "9125S"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Heat sink, Hyperthreading, AES, VR READY"
            }
        }
    },
    {
        "id": 85,
        "type": "ram",
        "nimi": "G.SKILL 64GB DDR2",
        "hind": 371,
        "pilt": "pildid/ram.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "G.SKILL",
                "Nimi": "G.SKILL 64GB DDR2",
                "Moodulite arv": 4
            },
            "TEHNIILISED NÄITAJAD": {
                "Maht": "64GB",
                "Tüüp": "DDR2",
                "Voltage": "1.5v",
                "Siini kiirus": "1600MHz"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Anti-Static band, Heat sink, EEC"
            }
        }
    },
    {
        "id": 86,
        "type": "ram",
        "nimi": "A-Data 6GB DDR1",
        "hind": 699,
        "pilt": "pildid/ram.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "A-Data",
                "Nimi": "A-Data 6GB DDR1",
                "Moodulite arv": 8
            },
            "TEHNIILISED NÄITAJAD": {
                "Maht": "6GB",
                "Tüüp": "DDR1",
                "Voltage": "1.2v LOW VOLTAGE",
                "Siini kiirus": "1700MHz"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Anti-Static band, RGB LED, Overclock enabled"
            }
        }
    },
    {
        "id": 87,
        "type": "ram",
        "nimi": "Dell 2GB DDR1",
        "hind": 211,
        "pilt": "pildid/ram.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "Dell",
                "Nimi": "Dell 2GB DDR1",
                "Moodulite arv": 2
            },
            "TEHNIILISED NÄITAJAD": {
                "Maht": "2GB",
                "Tüüp": "DDR1",
                "Voltage": "1.2v LOW VOLTAGE",
                "Siini kiirus": "2300MHz"
            },
            "ERIMÄRKUSED": {
                "Lisad": "NON-ECC unbuffered, Heat sink, EEC, Overclock enabled"
            }
        }
    },
    {
        "id": 88,
        "type": "gpu",
        "nimi": "GTX 1570",
        "hind": 194,
        "pilt": "pildid/gpu.png",
        "specs": {
            "GPU ENGINE SPECS": {
                "CUDA Cores": 2727,
                "Graphics Clock (MHz)": 1427,
                "Processor Clock (MHz)": 1357,
                "Graphics Performance Score": 1228
            },
            "Memory Specs": {
                "Memory Clock": "210 Gbps",
                "Standard Memory Config": "14 GB GDDR2X",
                "Memory Interface": "GDDR3",
                "Memory Interface Width": "256-bit"
            },
            "Feature Support": {
                "Bus Support": "PCIe 2.0",
                "Supported Technologies": "SLI, KUDA, 3D Vizion, MVIDIA G-SYNC™, GameRiver, Anseel, MVIDIA WhisperMode"
            },
            "Display Support": {
                "Maximum Digital Resolution": "7623x9072@215Hz",
                "Standard Display Connectors": "HDMI 2.0b"
            },
            "Standard Graphics Card Dimensions": {
                "Length": 6,
                "Height": 3,
                "Width": "2-slot"
            },
            "Thermal and Power Specs": {
                "Maximum GPU Temperature (in C)": 95,
                "Maximum Graphics Card Power (W)": 182,
                "Minimum System Power Requirement (W)": 908,
                "Supplementary Power Connectors": "6-pin"
            }
        }
    },
    {
        "id": 89,
        "type": "ram",
        "nimi": "Crosair 1GB DDR1",
        "hind": 649,
        "pilt": "pildid/ram.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "Crosair",
                "Nimi": "Crosair 1GB DDR1",
                "Moodulite arv": 2
            },
            "TEHNIILISED NÄITAJAD": {
                "Maht": "1GB",
                "Tüüp": "DDR1",
                "Voltage": "1.5v",
                "Siini kiirus": "1700MHz"
            },
            "ERIMÄRKUSED": {
                "Lisad": "NON-ECC unbuffered, Heat sink, EEC"
            }
        }
    },
    {
        "id": 90,
        "type": "cpu",
        "nimi": "Intel i3-1550kh",
        "hind": 449,
        "pilt": "pildid/cpu.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "intel",
                "Nimi": "Intel i3-1550kh",
                "Tüüp": "i3",
                "Mudel": "1550kh"
            },
            "TEHINILISED NÄITAJAD": {
                "CPU CLOCK": "3GHz",
                "CORE COUNT": 8,
                "SOCKET": "9054S"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Overclockable, Hyperthreading, Speedstep"
            }
        }
    },
    {
        "id": 91,
        "type": "ram",
        "nimi": "Dell 128GB DDR2",
        "hind": 102,
        "pilt": "pildid/ram.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "Dell",
                "Nimi": "Dell 128GB DDR2",
                "Moodulite arv": 4
            },
            "TEHNIILISED NÄITAJAD": {
                "Maht": "128GB",
                "Tüüp": "DDR2",
                "Voltage": "1.5v",
                "Siini kiirus": "1300MHz"
            },
            "ERIMÄRKUSED": {
                "Lisad": "EEC, RGB LED"
            }
        }
    },
    {
        "id": 92,
        "type": "ram",
        "nimi": "Kingston 8GB DDR2",
        "hind": 345,
        "pilt": "pildid/ram.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "Kingston",
                "Nimi": "Kingston 8GB DDR2",
                "Moodulite arv": 8
            },
            "TEHNIILISED NÄITAJAD": {
                "Maht": "8GB",
                "Tüüp": "DDR2",
                "Voltage": "1.5v",
                "Siini kiirus": "2200MHz"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Anti-Static band, NON-ECC unbuffered, Heat sink, EEC, Overclock enabled"
            }
        }
    },
    {
        "id": 93,
        "type": "cpu",
        "nimi": "AMD Ryzen 7 1700",
        "hind": 416,
        "pilt": "pildid/cpu.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "AMD",
                "Nimi": "AMD Ryzen 7 1700",
                "Tüüp": "Ryzen7",
                "Mudel": "1700"
            },
            "TEHINILISED NÄITAJAD": {
                "CPU CLOCK": "3.3GHz",
                "CORE COUNT": 8,
                "SOCKET": "6219S"
            },
            "ERIMÄRKUSED": {
                "Lisad": "SMT"
            }
        }
    },
    {
        "id": 94,
        "type": "ram",
        "nimi": "Crosair 1GB DDR1",
        "hind": 427,
        "pilt": "pildid/ram.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "Crosair",
                "Nimi": "Crosair 1GB DDR1",
                "Moodulite arv": 8
            },
            "TEHNIILISED NÄITAJAD": {
                "Maht": "1GB",
                "Tüüp": "DDR1",
                "Voltage": "1.2v LOW VOLTAGE",
                "Siini kiirus": "2000MHz"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Anti-Static band, NON-ECC unbuffered, Heat sink, EEC, RGB LED"
            }
        }
    },
    {
        "id": 95,
        "type": "cpu",
        "nimi": "Intel i3-3660",
        "hind": 434,
        "pilt": "pildid/cpu.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "intel",
                "Nimi": "Intel i3-3660",
                "Tüüp": "i3",
                "Mudel": "3660"
            },
            "TEHINILISED NÄITAJAD": {
                "CPU CLOCK": "2.7GHz",
                "CORE COUNT": 8,
                "SOCKET": "9976S"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Heat sink, Hyperthreading, AES, VR READY"
            }
        }
    },
    {
        "id": 96,
        "type": "cpu",
        "nimi": "Intel i5-4050",
        "hind": 854,
        "pilt": "pildid/cpu.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "intel",
                "Nimi": "Intel i5-4050",
                "Tüüp": "i5",
                "Mudel": "4050"
            },
            "TEHINILISED NÄITAJAD": {
                "CPU CLOCK": "3.1GHz",
                "CORE COUNT": 1,
                "SOCKET": "2811S"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Overclockable, Heat sink, Speedstep, AES, VR READY"
            }
        }
    },
    {
        "id": 97,
        "type": "cpu",
        "nimi": "AMD Ryzen 3 Pro 1300X",
        "hind": 127,
        "pilt": "pildid/cpu.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "AMD",
                "Nimi": "AMD Ryzen 3 Pro 1300X",
                "Tüüp": "Ryzen3",
                "Mudel": "1300X"
            },
            "TEHINILISED NÄITAJAD": {
                "CPU CLOCK": "3.3GHz",
                "CORE COUNT": 8,
                "SOCKET": "9762S"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Overclockable, Heat sink, SMT, AES, FMA3, VR READY"
            }
        }
    },
    {
        "id": 98,
        "type": "ram",
        "nimi": "Crosair 1GB DDR3",
        "hind": 807,
        "pilt": "pildid/ram.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "Crosair",
                "Nimi": "Crosair 1GB DDR3",
                "Moodulite arv": 2
            },
            "TEHNIILISED NÄITAJAD": {
                "Maht": "1GB",
                "Tüüp": "DDR3",
                "Voltage": "1.2v LOW VOLTAGE",
                "Siini kiirus": "2100MHz"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Heat sink, RGB LED, Overclock enabled"
            }
        }
    },
    {
        "id": 99,
        "type": "ram",
        "nimi": "Silicon Power 24GB DDR3",
        "hind": 515,
        "pilt": "pildid/ram.png",
        "specs": {
            "ÜLDNÄITAJAD": {
                "Tootja": "Silicon Power",
                "Nimi": "Silicon Power 24GB DDR3",
                "Moodulite arv": 1
            },
            "TEHNIILISED NÄITAJAD": {
                "Maht": "24GB",
                "Tüüp": "DDR3",
                "Voltage": "1.5v",
                "Siini kiirus": "1800MHz"
            },
            "ERIMÄRKUSED": {
                "Lisad": "Anti-Static band, NON-ECC unbuffered, EEC"
            }
        }
    }
]
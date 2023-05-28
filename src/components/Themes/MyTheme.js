import React, { useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import "./MyTheme.css";

function Container({ theme, mode }) {
    return (
        <div
            className="theme-app-container d-flex flex-column justify-content-center align-items-center mb-4"
            data-theme={theme.name}
        >
            <Template theme={theme} mode={mode} />
        </div>
    );
}

function Template({ theme, mode }) {
    const { name } = theme;
    const {
        primary,
        secondary,
        background,
        color,
        borderColor,
        buttonBackgroundColor,
    } = theme[mode];
    const ref = useRef();

    useEffect(() => {
        async function downloadImage() {
            const element = ref.current;

            console.log(element);

            const canvas = await html2canvas(element);

            const data = canvas.toDataURL("image/png");
            const link = document.createElement("a");

            if (typeof link.download === "string") {
                link.href = data;
                link.download = "robi.png";

                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else {
                window.open(data);
            }
        }

        console.log(name);

        if (name === "Blue") {
            // NOTE: Uncomment to download
            // downloadImage();
        }
    }, [name]);

    return (
        <div
            className="theme-app"
            style={{ color, border: `solid 1px ${borderColor}` }}
            data-theme={name}
            ref={ref}
        >
            <div
                className="theme-sidebar"
                style={{
                    background,
                    borderRight: `solid 1px ${borderColor}`,
                }}
            >
                <div className="theme-sidebar-title">Title</div>
                <div
                    className="theme-nav selected"
                    style={{
                        background: primary,
                        color: "white",
                    }}
                >
                    Route 1
                </div>
                <div className="theme-nav">Route 2</div>
                <div className="theme-nav">Route 3</div>
            </div>
            <div
                className="theme-maincontainer"
                style={{ background: secondary }}
            >
                <div className="theme-title">{name}</div>
                <div
                    // style={{ display: "flex", justifyContent: "space-between" }}
                    style={{ display: "flex", gap: "10px" }}
                >
                    <div
                        className="btn"
                        style={{
                            background: buttonBackgroundColor,
                            color: primary,
                        }}
                    >
                        Button
                    </div>
                    <div
                        className="btn"
                        style={{ background: primary, color: secondary }}
                    >
                        Button
                    </div>
                </div>
                <div className="background" style={{ background }}>
                    Aa
                </div>
            </div>
        </div>
    );
}

export default function MyTheme() {
    const Themes = [
        {
            name: "Blue",
            light: {
                primary: "#167EFB",
                secondary: "#fff",
                background: "#F8F8FC",
                color: "#24292f",
                selectedRowOpacity: 10,
                buttonBackgroundColor: "#e9ecef",
                borderColor: "#d6d8db80",
            },
            dark: {
                primary: "#167EFB",
                secondary: "#151515",
                background: "#1e1e1e",
                color: "#d4d4d4",
                selectedRowOpacity: 10,
                buttonBackgroundColor: "#242628",
                borderColor: "#343a4080",
            },
        },
        // {
        //     name: "Brown",
        //     light: {
        //         primary: "#A52A2A",
        //         secondary: "#fff",
        //         background: "#F8F8FC",
        //         color: "#24292f",
        //         selectedRowOpacity: 10,
        //         buttonBackgroundColor: "#e9ecef",
        //         borderColor: "#d6d8db80",
        //     },
        //     dark: {
        //         primary: "#A52A2A",
        //         secondary: "#151515",
        //         background: "#1e1e1e",
        //         color: "#d4d4d4",
        //         selectedRowOpacity: 10,
        //         buttonBackgroundColor: "#242628",
        //         borderColor: "#343a4080",
        //     },
        // },
        // {
        //     name: "Gray",
        //     light: {
        //         primary: "#708090",
        //         secondary: "#fff",
        //         background: "#F8F8FC",
        //         color: "#24292f",
        //         selectedRowOpacity: 10,
        //         buttonBackgroundColor: "#e9ecef",
        //         borderColor: "#d6d8db80",
        //     },
        //     dark: {
        //         primary: "#708090",
        //         secondary: "#151515",
        //         background: "#1e1e1e",
        //         color: "#d4d4d4",
        //         selectedRowOpacity: 10,
        //         buttonBackgroundColor: "#242628",
        //         borderColor: "#343a4080",
        //     },
        // },
        // {
        //     name: "Green",
        //     light: {
        //         primary: "#2E8B57",
        //         secondary: "#fff",
        //         background: "#F8F8FC",
        //         color: "#24292f",
        //         selectedRowOpacity: 10,
        //         buttonBackgroundColor: "#e9ecef",
        //         borderColor: "#d6d8db80",
        //     },
        //     dark: {
        //         primary: "#2E8B57",
        //         secondary: "#151515",
        //         background: "#1e1e1e",
        //         color: "#d4d4d4",
        //         selectedRowOpacity: 10,
        //         buttonBackgroundColor: "#242628",
        //         borderColor: "#343a4080",
        //     },
        // },
        // {
        //     name: "Gold",
        //     light: {
        //         primary: "#B8860B",
        //         secondary: "#fff",
        //         background: "#F8F8FC",
        //         color: "#24292f",
        //         selectedRowOpacity: 10,
        //         buttonBackgroundColor: "#e9ecef",
        //         borderColor: "#d6d8db80",
        //     },
        //     dark: {
        //         primary: "#B8860B",
        //         secondary: "#151515",
        //         background: "#1e1e1e",
        //         color: "#d4d4d4",
        //         selectedRowOpacity: 10,
        //         buttonBackgroundColor: "#242628",
        //         borderColor: "#343a4080",
        //     },
        // },
        // {
        //     name: "Magenta",
        //     light: {
        //         primary: "#8B008B",
        //         secondary: "#fff",
        //         background: "#F8F8FC",
        //         color: "#24292f",
        //         selectedRowOpacity: 10,
        //         buttonBackgroundColor: "#e9ecef",
        //         borderColor: "#d6d8db80",
        //     },
        //     dark: {
        //         primary: "#8B008B",
        //         secondary: "#151515",
        //         background: "#1e1e1e",
        //         color: "#d4d4d4",
        //         selectedRowOpacity: 10,
        //         buttonBackgroundColor: "#242628",
        //         borderColor: "#343a4080",
        //     },
        // },
        // {
        //     name: "Orange",
        //     light: {
        //         primary: "#FF8C00",
        //         secondary: "#fff",
        //         background: "#F8F8FC",
        //         color: "#24292f",
        //         selectedRowOpacity: 10,
        //         buttonBackgroundColor: "#e9ecef",
        //         borderColor: "#d6d8db80",
        //     },
        //     dark: {
        //         primary: "#FF8C00",
        //         secondary: "#151515",
        //         background: "#1e1e1e",
        //         color: "#d4d4d4",
        //         selectedRowOpacity: 10,
        //         buttonBackgroundColor: "#242628",
        //         borderColor: "#343a4080",
        //     },
        // },
        // {
        //     name: "Pink",
        //     light: {
        //         primary: "#C71585",
        //         secondary: "#fff",
        //         background: "#F8F8FC",
        //         color: "#24292f",
        //         selectedRowOpacity: 10,
        //         buttonBackgroundColor: "#e9ecef",
        //         borderColor: "#d6d8db80",
        //     },
        //     dark: {
        //         primary: "#C71585",
        //         secondary: "#151515",
        //         background: "#1e1e1e",
        //         color: "#d4d4d4",
        //         selectedRowOpacity: 10,
        //         buttonBackgroundColor: "#242628",
        //         borderColor: "#343a4080",
        //     },
        // },
        // {
        //     name: "Purple",
        //     light: {
        //         primary: "#6A5ACD",
        //         secondary: "#fff",
        //         background: "#F8F8FC",
        //         color: "#24292f",
        //         selectedRowOpacity: 20,
        //         buttonBackgroundColor: "#e9ecef",
        //         borderColor: "#d6d8db80",
        //     },
        //     dark: {
        //         primary: "#a580f5",
        //         secondary: "#151515",
        //         background: "#1e1e1e",
        //         color: "#d4d4d4",
        //         selectedRowOpacity: 20,
        //         buttonBackgroundColor: "#242628",
        //         borderColor: "#343a4080",
        //     },
        // },
        // {
        //     name: "Red",
        //     light: {
        //         primary: "#e63e44",
        //         secondary: "#fff",
        //         background: "#F8F8FC",
        //         color: "#24292f",
        //         selectedRowOpacity: 10,
        //         buttonBackgroundColor: "#e9ecef",
        //         borderColor: "#d6d8db80",
        //     },
        //     dark: {
        //         primary: "#fd4a50",
        //         secondary: "#151515",
        //         background: "#1e1e1e",
        //         color: "#d4d4d4",
        //         selectedRowOpacity: 10,
        //         buttonBackgroundColor: "#242628",
        //         borderColor: "#343a4080",
        //     },
        // },
        // {
        //     name: "Slate",
        //     light: {
        //         primary: "#2F4F4F",
        //         secondary: "#fff",
        //         background: "#F8F8FC",
        //         color: "#24292f",
        //         selectedRowOpacity: 10,
        //         buttonBackgroundColor: "#e9ecef",
        //         borderColor: "#d6d8db80",
        //     },
        //     dark: {
        //         primary: "#2F4F4F",
        //         secondary: "#151515",
        //         background: "#1e1e1e",
        //         color: "#d4d4d4",
        //         selectedRowOpacity: 10,
        //         buttonBackgroundColor: "#242628",
        //         borderColor: "#343a4080",
        //     },
        // },
        // {
        //     name: "Teal",
        //     light: {
        //         primary: "#008080",
        //         secondary: "#fff",
        //         background: "#F8F8FC",
        //         color: "#24292f",
        //         selectedRowOpacity: 10,
        //         buttonBackgroundColor: "#e9ecef",
        //         borderColor: "#d6d8db80",
        //     },
        //     dark: {
        //         primary: "#008080",
        //         secondary: "#151515",
        //         background: "#1e1e1e",
        //         color: "#d4d4d4",
        //         selectedRowOpacity: 10,
        //         buttonBackgroundColor: "#242628",
        //         borderColor: "#343a4080",
        //     },
        // },
        // {
        //     name: "Navy",
        //     light: {
        //         primary: "#051D49",
        //         secondary: "#fff",
        //         background: "#F8F8FC",
        //         color: "#24292f",
        //         selectedRowOpacity: 10,
        //         buttonBackgroundColor: "#e9ecef",
        //         borderColor: "#d6d8db80",
        //     },
        //     dark: {
        //         primary: "#ffffff",
        //         secondary: "#0e1b34",
        //         background: "#051d49",
        //         color: "#ffffff",
        //         selectedRowOpacity: 10,
        //         buttonBackgroundColor: "#2d357d",
        //         borderColor: "#00000080",
        //     },
        // },
    ];

    return (
        <div id="id">
            <div className="themes">
                {Themes.map((theme) => {
                    return (
                        <Container
                            key={theme.name}
                            theme={theme}
                            mode="light"
                        />
                    );
                })}
            </div>
        </div>
    );
}

// TODO: Refactor to react
// events: [
//     {
//         selector: "#id .custom-control-input",
//         event: "change",
//         listener(event) {
//             // Selected mode
//             const mode = event.target.dataset.mode;

//             // Deselect both switches
//             component
//                 .findAll(".custom-control-input")
//                 .forEach((node) => (node.checked = false));

//             // Always select current switch
//             event.target.checked = true;

//             if (mode == "os") {
//                 // Remove key from local storage
//                 RemoveLocal("prefersColorScheme");
//             } else {
//                 // Save user preference to local storage
//                 SetLocal("prefersColorScheme", mode);
//             }

//             // Reset theme
//             SetTheme();
//         },
//     },
// ],
// onAdd() {
//     if (!GetLocal("prefersColorScheme")) {
//         // Deselect mode
//         component.find(".custom-control-input:checked").checked = false;

//         // Select OS switch
//         component.find(
//             '.custom-control-input[data-mode="os"]'
//         ).checked = true;
//     }

//     async function downloadImage() {
//         const element = component.get();

//         console.log(element);

//         const canvas = await html2canvas(element);

//         const data = canvas.toDataURL("image/png");
//         const link = document.createElement("a");

//         if (typeof link.download === "string") {
//             link.href = data;
//             link.download = "image.png";

//             document.body.appendChild(link);
//             link.click();
//             document.body.removeChild(link);
//         } else {
//             window.open(data);
//         }
//     }

//     // downloadImage();
// },

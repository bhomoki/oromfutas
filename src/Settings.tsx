import { ChevronDown, Pipette, UndoIcon } from 'lucide-react';
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';
import { Slider, SliderChangeEvent } from 'primereact/slider';
import { useState } from 'react';

/* eslint-disable no-empty */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-unused-vars */

var mainColorR = 0;
var mainColorG = 0;
var mainColorB = 0;
var mainColorHex: string;

/*
function getColors(isDark: boolean) {
    const UIcolors = localStorage.getItem('UIcolors' + (isDark ? 'Dark' : 'Light')) || '';
    try {
        const uic = JSON.parse(UIcolors);
        if (typeof uic.R === 'number' && typeof uic.G === 'number' && typeof uic.B === 'number') {
            return uic;
        }
    } catch {}
    return isDark ? { R: 69, G: 197, B: 230 } : { R: 51, G: 143, B: 173 };
}

function resetColors(isDark: boolean) {
    localStorage.removeItem('UIcolors' + (isDark ? 'Dark' : 'Light'));
    setColorsMain(getColors(isDark), isDark);
    getColors(isDark);
}

function isDefaultColor(isDark: boolean) {
    const UIcolors = localStorage.getItem('UIcolors' + (isDark ? 'Dark' : 'Light'));
    if (UIcolors) {
        return false;
    }
    return true;
}

function isDark() {
    const darkSet =
        localStorage.getItem('theme') === 'dark' ||
        (localStorage.getItem('theme') === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    return darkSet;
}

function darken() {
    document.documentElement.setAttribute('theme', 'dark');
}

function lighten() {
    document.documentElement.removeAttribute('theme');
}

if (isDark()) {
    darken();
}
*/
// document.documentElement.setAttribute('theme', isDark() ? 'dark' : localStorage.getItem('theme') || 'system');

/*
function componentToHex(c: number) {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}

function rgbToHex(r: number, g: number, b: number) {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function hexToRgb(hex: string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
              R: parseInt(result[1], 16),
              G: parseInt(result[2], 16),
              B: parseInt(result[3], 16),
          }
        : null;
}
*/
function modeChanged(e: RadioButtonChangeEvent) {
    var themeSet = e.value.toString();
    setTimeout(() => {
        localStorage.setItem('theme', themeSet);
        document.documentElement.setAttribute('theme', themeSet);
        if (themeSet === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('theme', 'dark');
        }
        // document.documentElement.removeAttribute('theme');
    }, 1);
    /*
    setTimeout(() => {
        const UIcolors = getColors(isDark());
        if (UIcolors) {
            mainColorR = UIcolors.R;
            mainColorG = UIcolors.G;
            mainColorB = UIcolors.B;
            setColorsMain(UIcolors, isDark());
        }
        isDefault = isDefaultColor(isDark());
        mainColorHex = rgbToHex(mainColorR, mainColorG, mainColorB);
    }, 100);
    */
}
/*
function setColorsMain(rgb: { R: unknown; G: unknown; B: unknown; isDark: unknown }, isDark: boolean) {
    const colorsRGB = document.querySelector('#colorsRGB');
    if (colorsRGB) {
        document.head.removeChild(colorsRGB);
    }
    document.head.insertAdjacentHTML(
        'beforeend',
        `<style id="colorsRGB">html${isDark ? '[theme=2]' : ''} {--ciderColorMainR:${rgb.R};--ciderColorMainG:${
            rgb.G
        };--ciderColorMainB:${rgb.B}}</style>`,
    );
    if (typeof rgb.isDark === 'boolean') {
        localStorage.setItem(
            'UIcolors' + (rgb.isDark ? 'Dark' : 'Light'),
            '{"R": ' + rgb.R + ', "G": ' + rgb.G + ', "B": ' + rgb.B + '}',
        );
    }
}

function setColors() {
    setColorsMain(
        {
            R: mainColorR,
            G: mainColorG,
            B: mainColorB,
            isDark: isDark(),
        },
        isDark(),
    );
    isDefault = isDefaultColor(isDark());
    mainColorHex = rgbToHex(mainColorR, mainColorG, mainColorB);
}

function setColorsP() {
    const rgb = hexToRgb(mainColorHex) || { R: 0, G: 0, B: 0 };
    mainColorR = rgb.R;
    mainColorG = rgb.G;
    mainColorB = rgb.B;
    setColors();
}
*/
function Settings() {
    const [sliderValue, setSliderValue] = useState<number>(0);
    const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || 'system');
    return (
        <>
            <h1 className="flex">
                <div>Settings</div>
            </h1>
            <p>&nbsp;</p>
            <h2>UI theme</h2>
            <div className="inset">
                <div className="flex" style={{ gap: 40 }}>
                    <label className="radiolabel">
                        <RadioButton
                            value={'system'}
                            name="theme"
                            onChange={(e) => {
                                setTheme('system');
                                modeChanged(e);
                            }}
                            checked={theme === 'system'}
                        />
                        <span>System default</span>
                    </label>
                    <label className="radiolabel">
                        <RadioButton
                            value={'light'}
                            name="theme"
                            onChange={(e) => {
                                setTheme('light');
                                modeChanged(e);
                            }}
                            checked={theme === 'light'}
                        />
                        <span>Light mode</span>
                    </label>
                    <label className="radiolabel">
                        <RadioButton
                            value={'dark'}
                            name="theme"
                            onChange={(e) => {
                                setTheme('dark');
                                modeChanged(e);
                            }}
                            checked={theme === 'dark'}
                        />
                        <span>Dark mode</span>
                    </label>
                    <label className="radiolabel">
                        <RadioButton
                            value={'classic'}
                            name="theme"
                            onChange={(e) => {
                                setTheme('classic');
                                modeChanged(e);
                            }}
                            checked={theme === 'classic'}
                        />
                        <span>Classic Falcon</span>
                    </label>
                </div>

                <p style={{ margin: '20px 0 0 0', fontStyle: 'italic', maxWidth: 565 }}>
                    "Dark mode" changes light UI backgrounds to a dark color and changes text from dark to light. When
                    you choose "System default", your operating system's light/dark settings will be applied.
                </p>
            </div>

            <div className="hidden">
                <h3>UI color for dark / light mode</h3>
                <div className="inset">
                    <p style={{ margin: '20px 0 20px 0', fontStyle: 'italic', maxWidth: 565 }}>
                        Set your primary UI color here. Use the sliders or the color picker below.
                    </p>
                    <div className="rangeholder">
                        <Slider
                            value={mainColorR}
                            min={0}
                            max={255}
                            onChange={(e: SliderChangeEvent) => {
                                setSliderValue(e.value as number);
                            }}
                        />
                        <span className="colorlabel">
                            <span
                                className="swatch"
                                style={{ backgroundColor: 'rgba(' + mainColorR + ', 0, 0, 1)' }}
                            ></span>
                            <span style={{ color: '#ff3333' }}>R</span>ed [{mainColorR}]
                        </span>
                    </div>
                    <div className="rangeholder">
                        <Slider
                            value={mainColorG}
                            min={0}
                            max={255}
                            onChange={(e: SliderChangeEvent) => {
                                setSliderValue(e.value as number);
                            }}
                        />

                        <span className="colorlabel">
                            <span
                                className="swatch"
                                style={{ backgroundColor: 'rgba(0, ' + mainColorG + ', 0, 1)' }}
                            ></span>
                            <span style={{ color: '#00bb00' }}>G</span>reen [{mainColorG}]
                        </span>
                    </div>

                    <div className="rangeholder">
                        <Slider
                            value={mainColorB}
                            min={0}
                            max={255}
                            onChange={(e: SliderChangeEvent) => {
                                setSliderValue(e.value as number);
                            }}
                        />

                        <span className="colorlabel">
                            <span
                                className="swatch"
                                style={{ backgroundColor: 'rgba(0, ' + mainColorB + ', 0, 1)' }}
                            ></span>
                            <span style={{ color: '#5577ff' }}>B</span>lue [{mainColorB}]
                        </span>
                    </div>
                    <label
                        style={{
                            margin: '20px 0',
                            width: 230,
                            height: 37,
                            lineHeight: 37,
                            cursor: 'pointer',
                            display: 'block',
                            position: 'relative',
                        }}
                    >
                        <span className="href hovu" style={{ marginLeft: 44, position: 'static' }}>
                            <Pipette />
                            <input
                                type="color"
                                value="mainColorHex"
                                className="colorpicker"
                                onChange={(e) => {}}
                                style={{ position: 'absolute', left: 0 }}
                            />
                            Color picker
                            <ChevronDown />
                        </span>
                    </label>

                    <a onClick={(e) => {}} className="hasicon">
                        <UndoIcon />
                        <span>Reset color to default</span>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Settings;

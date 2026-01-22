import React from "react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const cycleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else if (theme === "dark") {
            setTheme("system");
        } else {
            setTheme("light");
        }
    };

    const getIcon = () => {
        if (theme === "system") {
            return "💻";
        }
        return theme === "dark" ? "🌙" : "☀️";
    };

    const getLabel = () => {
        if (theme === "system") {
            return "System";
        }
        return theme === "dark" ? "Dark" : "Light";
    };

    return (
        <button
            onClick={cycleTheme}
            className="theme-toggle"
            aria-label={`Current theme: ${getLabel()}. Click to change.`}
            title={`Theme: ${getLabel()}`}
        >
            <span className="theme-toggle-icon">{getIcon()}</span>
            <span className="theme-toggle-label">{getLabel()}</span>
        </button>
    );
}

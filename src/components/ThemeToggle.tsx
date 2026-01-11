import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const isLight = theme === 'light';

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
            className="fixed bottom-6 right-6 z-[60] flex items-center justify-center rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 h-14 w-14 transition-colors"
        >
            {isLight ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
        </button>
    );
};

export default ThemeToggle;

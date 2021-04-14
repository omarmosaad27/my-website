import React,{useState, useEffect ,useContext} from 'react'
import {mySkills} from './components/skills/Data'
import {myProjects} from './components/projects/Data'
const AppContext = React.createContext();
// theme local storage
const getStorageTheme = () => {
    let theme = 'light-theme';
    if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme');
    }
    return theme;
};
const AppProvider = ({children})=>{
    // start nav bar states and functionality
    const [theme, setTheme] = useState(getStorageTheme());
    const [isLight,setIslight]=useState(true)
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const toggleTheme = () => {
        if (theme === 'light-theme') {
        setTheme('dark-theme');
        setIslight(false)
        } else {
        setTheme('light-theme');
        setIslight(true)
        }
    };
    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
        }, [theme]);
    // end nav bar states and functionality
    // start skills states for data
    const [skills, setSkills] = useState(mySkills)
    
    // end skills states for data
    // start projects
    const [projects, setProjects] = useState(myProjects)
    // end projects
    return(
        <AppContext.Provider 
        value={{
            toggleTheme,
            isLight,
            click,
            handleClick,
            skills,
            projects

        }}>
            {children}
        </AppContext.Provider>
    )
}
// make sure use
export const useGlobalContext = ()=>{
    return useContext(AppContext)
}
export {AppContext,AppProvider}
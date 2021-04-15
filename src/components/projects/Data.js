import xypoImg from './../../images/xypo.PNG'
import lorukiImg from './../../images/loruki.png'
import Trvl from './../../images/trvlPNG.PNG'
import omxir from './../../images/omxirPNG.PNG'
import ralish from './../../images/ralishPNG.PNG'
import omstore from './../../images/omstorePNG.PNG'
import githubusers from './../../images/githubusers.PNG'

import {AiOutlineHtml5} from 'react-icons/ai'
import {FaCss3Alt,FaReact,FaGitAlt,FaSass} from 'react-icons/fa'
import {DiJavascript} from 'react-icons/di'
import {SiStyledComponents} from 'react-icons/si'
export const myProjects = [
    {
        id:1,
        name:"xypo",
        img:xypoImg,
        tools:{ 
            html:<AiOutlineHtml5/>,
            css:<FaCss3Alt/>,
            js:<DiJavascript/>
        },
        link:"https://omarmosaad27.github.io/xypo/",
        githubLink:"https://github.com/omarmosaad27/xypo"
    },
    {
        id:2,
        name:"loruki",
        img:lorukiImg,
        tools:{ 
            html:<AiOutlineHtml5/>,
            css:<FaCss3Alt/>,
            js:<DiJavascript/>
        },
        link:"https://omarmosaad27.github.io/loruki-website/",
        githubLink:"https://github.com/omarmosaad27/loruki-website"
    },
    {
        id:3,
        name:"TRVL",
        img:Trvl,
        tools:{ 
            react:<FaReact/>,
            css:<FaCss3Alt/>,
            styled:<SiStyledComponents/>
        },
        link:"https://omarmosaad27.github.io/TRVL/#/",
        githubLink:"https://github.com/omarmosaad27/TRVL"
    },
    {
        id:4,
        name:"omixr",
        img:omxir,
        tools:{ 
            react:<FaReact/>,
            css:<FaCss3Alt/>,
            styled:<SiStyledComponents/>
        },
        link:"https://omarmosaad27.github.io/omixr/#/",
        githubLink:"https://github.com/omarmosaad27/omixr"
    },
    {
        id:4,
        name:"ralish",
        img:ralish,
        tools:{ 
            react:<FaReact/>,
            css:<FaCss3Alt/>,
            styled:<SiStyledComponents/>
        },
        link:"https://omarmosaad27.github.io/ralish/#/",
        githubLink:"https://github.com/omarmosaad27/ralish"
    },
    {
        id:5,
        name:"omstore",
        img:omstore,
        tools:{ 
            react:<FaReact/>,
            css:<FaCss3Alt/>,
        },
        link:"https://omarmosaad27.github.io/OMSTORE/#/",
        githubLink:"https://github.com/omarmosaad27/OMSTORE"
    },
    {
        id:6,
        name:"github-users",
        img:githubusers,
        tools:{ 
            react:<FaReact/>,
            css:<FaCss3Alt/>,
            styled:<SiStyledComponents/>
        },
        link:"https://omarmosaad27.github.io/search-github-users/",
        githubLink:"https://github.com/omarmosaad27/search-github-users"
    },

]
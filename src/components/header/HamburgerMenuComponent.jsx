import Hamburger, {HamburgerClose} from './Hamburger.jsx'
import {useState} from "preact/hooks";

export default function HamburgerMenuComponent({socios, formacao, sobre}) {
    const [open, setOpen] = useState(false);

    return <div className="md:hidden text-lg text-white">
        {!open && <Hamburger onClick={() => setOpen(true)}/>}
        {open && <HamburgerClose onClick={() => setOpen(false)}/>}


        <div id="overlay-menu" className={`fixed top-20 left-0 w-full bg-aem-green-500 text-center z-50 ${open ? '' : 'hidden'}`}>
            <div><a href="/agenda">Agenda</a></div>

            <br/>
            <div><span className="text-gray-300">Sócios</span></div>
            {socios.map(page => <div><a href={page.url}>{page.frontmatter.shortTitle}</a></div>)}

            <br/>
            <div><span className="text-gray-300">Formação</span></div>
            {formacao.map(page => <div><a href={page.url}>{page.frontmatter.shortTitle}</a></div>)}

            <br/>
            <div><span className="text-gray-300">Associação</span></div>
            {sobre.map(page => <div><a href={page.url}>{page.frontmatter.shortTitle}</a></div>)}


            <br/>
        </div>
    </div>
}
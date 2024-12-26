import {useState} from "preact/hooks";

export default function DropdownMenu({label, links}) {

    const [overTo, setOverTo] = useState(null);
    const [open, setOpen] = useState(false);

    function onHover() {
        if (overTo) {
            window.clearTimeout(overTo);
            setOverTo(null);
        }
        setOpen(true);
    }

    function startCloseTimer() {
        const to = window.setTimeout(() => setOpen(false), 100);
        setOverTo(to);
    }

    return <div class={`relative font-sans font-bold text-md text-emerald-950 ${open ? 'pb-1' : 'pt-1'}`}
                onMouseEnter={onHover}
                onMouseLeave={startCloseTimer}>
        <span class={`text-sm cursor-pointer ${open ? 'underline' : ''}`}>{label}</span>
        <div
            class={`${open ? '' : 'hidden'} absolute -right-4 z-10 mt-2 w-56 bg-aem-green-500`}
            role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
            {links.map(page =>
                <div class="flex justify-end">
                    <a href={page.url} class="px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">
                        {page.frontmatter.shortTitle}
                    </a>
                </div>
            )}
        </div>
    </div>
}
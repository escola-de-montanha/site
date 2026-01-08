export default function Hamburger({onClick}) {
    return <div class="hamburger" onClick={onClick}>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
    </div>;
}

export function HamburgerClose({onClick}) {
    return <div class="hamburger" onClick={onClick}><span class="close">✕</span></div>
}
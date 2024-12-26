export function filterAndSortPages(pages) {
    return Object.values(pages)
        .filter(page => !page.frontmatter.excludeFromNav)
        .sort((a, b) => a.frontmatter.order - b.frontmatter.order)
}
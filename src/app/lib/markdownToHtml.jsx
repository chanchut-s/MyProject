import { remark } from 'remark';
import html from 'remark-html';
import rehypeRaw from 'rehype-raw';
import { unified } from 'unified';

export default async function markdownToHtml (markdown) {
    const result = await remark().use(html).process(markdown)
    return result.toString(); 
}
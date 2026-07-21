import { isRichContentKey } from "@/lib/website-content";

function stripDisallowedTags(html: string): string {
  return html.replace(/<[^>]+>/gi, (tag) => (/^<\/?(?:p|br|strong|em|b|i|a|ul|ol|li|h2|h3|h4|span)\b/i.test(tag) ? tag : ""));
}

function sanitizeHtml(html: string): string {
  const withoutScripts = html
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/\son\w+="[^"]*"/gi, "")
    .replace(/\son\w+='[^']*'/gi, "")
    .replace(/javascript:/gi, "");

  return stripDisallowedTags(withoutScripts);
}

type RichTextProps = {
  html: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

export function RichText({ html, className, as: Tag = "div" }: RichTextProps) {
  const safe = sanitizeHtml(html);
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: safe }} />;
}

type ContentTextProps = {
  contentKey: string;
  value: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

export function ContentText({ contentKey, value, className, as }: ContentTextProps) {
  if (isRichContentKey(contentKey)) {
    return <RichText html={value} className={className} as={as} />;
  }

  const Tag = as ?? "span";
  return <Tag className={className}>{value}</Tag>;
}

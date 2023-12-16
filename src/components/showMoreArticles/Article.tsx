interface Props {
    title: string;
    body: string;
}
const Article = ({title, body}: Props) => (
    <li className="pb-6 last:pb-0">
        <h2 className="text-24-26-700 text-pnp">
            {title}
        </h2>
        <p className="text-16-24-400 text-pnp-grey20">
            {body}
        </p>
    </li>
)
export default Article;

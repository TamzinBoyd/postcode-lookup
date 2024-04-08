import { FunctionComponent } from "react";

interface Props {
	classname?: string;
	tag?: keyof JSX.IntrinsicElements;
	children: any;
}
const Typography: FunctionComponent<Props> = ({
	classname = "",
	tag = "p",
	children,
}) => {
	const Tag = tag as keyof JSX.IntrinsicElements;
	return <Tag className={classname}>{children}</Tag>;
};

export default Typography;

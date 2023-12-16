interface Props {
  imgAlt?: string;
  imgSource: string;
  imgWidth?: string;
  className?: string;
}

const NavImages = ({ ...props }: Props) => (
  <img 
    src={`images/${props.imgSource}`} 
    className={props.className}
    width={props.imgWidth} 
    alt={props.imgAlt || ''} 
  />
);

export default NavImages;

import classes from "./Header.module.css"

const Header = (props) => {
    return (
        <div className={classes.wrapper}>
            header({props.count})/({props.countTwo})
        </div>
    );
}

export default Header;

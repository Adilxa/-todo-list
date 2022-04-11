import classes from "./Header.module.css"

const Header = (props) => {
    return (
        <div className={classes.wrapper}>
            Todoes({props.count})
        </div>
    );
}

export default Header;

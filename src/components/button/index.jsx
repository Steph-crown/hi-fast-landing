import { OutlineButtonContainer } from "./style";

export const OutlineButton = ({ children, fg, style }) => {
    return (
        <OutlineButtonContainer {...{ fg }} style={style}>
            <div className="button-text">{children}</div>
            <div className="button-hover"></div>
        </OutlineButtonContainer>
    );
};

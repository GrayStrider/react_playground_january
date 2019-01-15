import * as React from "react";
import './styles/Hello.css';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

interface State {
    currentEnthusiasm: number;
}

class Hello extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        const defaultProps = {enthusiasmLevel: 1}
        const mergedProps = {...defaultProps, ...props};
        this.state = {currentEnthusiasm: mergedProps.enthusiasmLevel};
    }

    public onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
    public onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1);

    public render() {
        const {name} = this.props;


        if (this.state.currentEnthusiasm <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }

        return (
            <div className="hello">
                <div className="greeting">
                    Hello, {name + getExclamationMarks(this.state.currentEnthusiasm)}
                </div>
                <button onClick={this.onDecrement}>-</button>
                <button onClick={this.onIncrement}>+</button>
            </div>
        );
    }

    public updateEnthusiasm(currentEnthusiasm: number) {
        this.setState({currentEnthusiasm});
    }
}

export default Hello;

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}

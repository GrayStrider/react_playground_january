import {DatePicker} from 'antd';
import 'antd/dist/antd.css'
import * as React from "react";
import {Link} from "react-router-dom";
import * as _ from "underscore";
import '../styles/Hello.css';

export interface IProps {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

function Hello({name, enthusiasmLevel = 1, onIncrement, onDecrement}: IProps) {
    if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
        <div className="hello">
            <div className="greeting">
                Hello, {name + getExclamationMarks(enthusiasmLevel)}
            </div>
            <div>
                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
            </div>
            <div>
                <p>{_.range(1, 11, 1)}</p>
            </div>
            <div>
                <DatePicker/>
            </div>
            <p>
                <Link to={'/app'}>App</Link>
            </p>
            <p>
                <Link to={'/error'}>404</Link>
            </p>
        </div>
    );
}

export default Hello;

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}

import * as React from 'react';
import { ChangeEvent } from 'react';

export interface IHelloFormProps {
    name: string
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export default class HelloForm extends React.Component<IHelloFormProps, any> {
    constructor(props: IHelloFormProps) {
        super(props);
    }

	public render() {
		return (
            <div>
                <input 
                    value={ this.props.name }
                    onChange={ e => this.props.handleChange(e) }
                />
            </div>
        );
	}
}
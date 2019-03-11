import * as React from 'react';

export interface IHelloContentProps {
	name: string;
}

export default class HelloContent extends React.Component<IHelloContentProps, any> {
    constructor(props: IHelloContentProps) {
        super(props);
    }

	public render() {
		return (
            <div>
                Hello { this.props.name }!
            </div>
        );
	}
}
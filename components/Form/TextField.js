import React, { PureComponent } from 'react'

class TextField extends PureComponent {
    render() {
        // Note in the second opening div how I get a reference to the DOM element of the text field
        return (
            <div className="rm-form-field">
                <div className="rm-textfield">
                    <input type="text" className="rm-textfield__input" onChange={this.props.onChange} />
                    <label htmlFor="demo-input" className="rm-textfield__label">
                        {this.props.label}
                    </label>
                </div>
            </div>
        )
    }
}

export default TextField

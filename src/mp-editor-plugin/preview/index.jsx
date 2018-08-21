import React, {PureComponent} from 'react';
import './preview.pcss'


export default class WhitespacePreview extends PureComponent {
    render() {
        const { instance } = this.props;
        return (
            <div className="bundle-goods-action-preview-design-component-whitespace-preview">
                商品详情
            </div>
        );
    }
}
    

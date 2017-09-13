import React, { Component } from 'react';

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

class BillinCycle extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
                <Content>
                    Ciclos de pagamentos
                </Content>
            </div>
        )
    }
}

export default BillinCycle

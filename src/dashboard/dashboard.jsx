import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSumary } from './dashBoardActions'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

class DashBoard extends Component {
    //chama metodo toda vez que ele for ser renderizado
    componentWillMount() {
        this.props.getSumary()
    }

    render() {
        const { credit, debt } = this.props.summary
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank' 
                            value={`R$ ${credit}`} text='Total de Crédito' />
                        <ValueBox cols='12 4' color='red' icon='credit-card'
                            value={`R$ ${debt}`} text='Total de Débitos' />
                        <ValueBox cols='12 4' color='blue' icon='money' 
                            value={`R$ ${credit - debt}`} text='Valor Consolidado' />
                    </Row>
                </Content>
            </div>
        )
    }
}

//estamos retirando o sumary do state da aplicação
const mapStateToPros = state => ({summary: state.dashBoard.summary})

//ligando a função(actionCreater) com o componente
// faz a ligação de todas as actionsCreator com o dispatch que se encarrega de 
    // dispara aa ações para o reducer
const mapDispatchToProps = dispatch => bindActionCreators({getSumary}, dispatch)

export default connect(mapStateToPros, mapDispatchToProps)(DashBoard)
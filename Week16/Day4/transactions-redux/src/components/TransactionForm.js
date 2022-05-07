import React, {Component} from 'react';
import {connect} from 'react-redux';
import {insert_trx,update_trx} from '../redux/actions';

class TransactionForm extends Component {
  constructor() {
    super();
    this.state = {
      accountNumber:'',
      FSC: '',
      name: '',
      amount: ''
    }
  }

  handleInputChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {currentIndex} = this.props
    if(currentIndex==-1) {
      this.props.handleInsert(this.state);
    }
    else {
      this.props.handleUpdate(this.state);
    }
    this.setState({
      accountNumber:'',
      FSC: '',
      name: '',
      amount: ''
    })
  }

  componentDidUpdate = (prevProps) => {
    if(prevProps.currentIndex != this.props.currentIndex && this.props.currentIndex!=-1){
      const trx = this.props.list[this.props.currentIndex]
      this.setState({
        accountNumber:trx.accountNumber||'',
        FSC: trx.FSC||'',
        name: trx.name||'',
        amount: trx.amount||'',
      })
    }
  }

  render(){
     const {currentIndex} = this.props;
      return(
        <>
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.accountNumber} onChange={this.handleInputChange} type="text" name="accountNumber" placeholder="Account Number" />
            <input value={this.state.FSC} onChange={this.handleInputChange} type="text" name="FSC" placeholder="FSC" />
            <input value={this.state.name} onChange={this.handleInputChange} type="text" name="name" placeholder="Name" />
            <input value={this.state.amount} onChange={this.handleInputChange} type="text" name="amount" placeholder="Amount" />
            <input type="submit" value={currentIndex==-1?'Submit':'Update'}/>
          </form>
        </>
      )
  }
}

const mapStateToProps = state => {
  return{
    currentIndex:state.currentIndex,
    list:state.list
  }
}
const mapDispatchToProps = dispatch => {
  return{
    handleInsert: (trx) => dispatch(insert_trx(trx)),
    handleUpdate: (trx) => dispatch(update_trx(trx))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TransactionForm)

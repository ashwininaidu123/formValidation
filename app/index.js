import React, {Component} from 'react';
import {ScrollView, View, Platform} from 'react-native';
import ControlPanel from './controlPanel';
import Header from './Header';
import StepButton from './StepButton';
import Form from './Form';
import Drawer from 'react-native-drawer';
import styles from './styles';
import {Icon} from 'native-base';
import DatePicker from 'react-native-datepicker';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      stepOne: true,
      stepTwo: false,
      name: '',
      date: '',
      amount: '',
      invoiceName: '',
      issueDate: '',
      repaymentDate: '',
      invoiceAmount: '',
      errorName: '',
      errorDate: '',
      errorAmount: '',
      errorInvoiceName: '',
      errorIssueDate: '',
      errorRepaymentDate: '',
      errorInvoiceAmount: '',
      submitted: false,
      stepTwoVisited: false,
      formTwoView: false,
      canGoToStep1: false,
    };
  }
  closeControlPanel = () => {
    this._drawer.close();
    this.setState({
      isOpen: false,
    });
  };
  openControlPanel = () => {
    this._drawer.open();
  };

  toggle = () => {
    this.setState({
      isOpen: true,
    });
  };
  componentDidMount() {
    this.setState({
      isOpen: false,
      stepOne: true,
      stepTwo: false,
    });
  }
  butttonOne = () => {
    let {canGoToStep1} = this.state;
    if (canGoToStep1) {
      this.setState({
        stepTwoVisited: true,
        stepOne: true,
        stepTwo: false,
      });
    }
  };
  butttonTwo = () => {
    let {
      name,
      date,
      amount,
      errorName,
      errorAmount,
      errorDate,
      canGoToStep1,
      invoiceAmount,
      repaymentDate,
    } = this.state;
    if (canGoToStep1) {
      invoiceAmount ? this.onInvoiceAmount(invoiceAmount) : '';
      this.onRepaymentDate(repaymentDate);
    }
    if (name == '') {
      this.setState({
        errorName: 'This field is required',
      });
    }
    if (date == '') {
      this.setState({
        errorDate: 'This field is required',
      });
    }
    if (amount == '') {
      this.setState({
        errorAmount: 'This field is required',
      });
    }
    if (
      name != '' &&
      date != '' &&
      amount != '' &&
      errorName == '' &&
      errorAmount == '' &&
      errorDate == ''
    ) {
      this.setState({
        stepOne: false,
        stepTwo: true,
        canGoToStep1: false,
      });
    }
  };
  submitButton = () => {
    let {
      invoiceName,
      repaymentDate,
      issueDate,
      invoiceAmount,
      errorInvoiceAmount,
      errorRepaymentDate,
      errorIssueDate,
      errorInvoiceName,
    } = this.state;
    if (invoiceName == '') {
      this.setState({
        errorInvoiceName: 'This field is required',
      });
    }
    if (repaymentDate == '') {
      this.setState({
        errorRepaymentDate: 'This field is required',
      });
    }
    if (issueDate == '') {
      this.setState({
        errorIssueDate: 'This field is required',
      });
    }
    if (invoiceAmount == '') {
      this.setState({
        errorInvoiceAmount: 'This field is required',
      });
    }
    if (
      invoiceName != '' &&
      repaymentDate != '' &&
      issueDate != '' &&
      invoiceAmount != '' &&
      errorInvoiceName == '' &&
      errorRepaymentDate == '' &&
      errorInvoiceAmount == '' &&
      errorIssueDate == ''
    ) {
      this.setState({
        submitted: true,
      });
    }
  };
  onName = (newName) => {
    if (/^[A-Za-z]+$/.test(newName)) {
      this.setState({name: newName, errorName: ''});
    } else {
      this.setState({name: newName, errorName: 'Please enter only alphabets'});
    }
  };
  onDate = (date) => {
    this.setState({date: date, errorDate: ''});
  };
  onAmount = (amount) => {
    this.setState({amount: amount, errorAmount: ''});
  };
  onInvoiceAmount = (invoiceAmount) => {
    let {amount} = this.state;
    if (invoiceAmount > amount) {
      this.setState({
        invoiceAmount: invoiceAmount,
        canGoToStep1: false,
        errorInvoiceAmount: '',
      });
    } else {
      this.setState({
        invoiceAmount: invoiceAmount,
        canGoToStep1: true,
        errorInvoiceAmount:
          'Amount should be more than the Deal else change the Deal amount',
      });
    }
  };
  onInvoiceName = (invoiceName) => {
    if (/^[A-Za-z]+$/.test(invoiceName)) {
      this.setState({invoiceName: invoiceName, errorInvoiceName: ''});
    } else {
      this.setState({
        invoiceName: invoiceName,
        errorInvoiceName: 'Please enter only alphabets',
      });
    }
  };
  onRepaymentDate = (repaymentDate) => {
    let {issueDate, date} = this.state;
    let cDate = new Date(date);
    let lDate = new Date(issueDate);
    let fDate = new Date(repaymentDate);
    if (cDate >= lDate == false && cDate <= fDate == false) {
      this.setState({repaymentDate: repaymentDate, errorRepaymentDate: ''});
    } else {
      this.setState({
        repaymentDate: repaymentDate,
        canGoToStep1: true,
        errorRepaymentDate:
          'Listing date should be in b/w issuing & repayment date, please change listing date in step1',
      });
    }
  };
  onIssueDate = (issueDate) => {
    this.setState({issueDate: issueDate, errorIssueDate: ''});
  };
  expandView = () => {
    let {formTwoView} = this.state;
    this.setState({
      formTwoView: !formTwoView,
    });
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Drawer
          open={this.state.isOpen}
          drawerType="overlay"
          tapToClose={true}
          openDrawerOffset={0.1}
          closedDrawerOffset={0}
          ref={(ref) => (this._drawer = ref)}
          content={<ControlPanel closeDrawer={this.closeControlPanel} />}>
          <View style={styles.mainContainer}>
            <Header onPress={this.toggle} />
            <StepButton
              {...this.state}
              butttonOne={this.butttonOne}
              butttonTwo={this.butttonTwo}
            />
            <Form
              {...this.state}
              expandView={this.expandView}
              onName={this.onName}
              onInvoiceAmount={this.onInvoiceAmount}
              onIssueDate={this.onIssueDate}
              onInvoiceName={this.onInvoiceName}
              onRepaymentDate={this.onRepaymentDate}
              onAmount={this.onAmount}
              onDate={this.onDate}
              submitButton={this.submitButton}
              butttonOne={this.butttonOne}
              butttonTwo={this.butttonTwo}
            />
          </View>
        </Drawer>
      </View>
    );
  }
}

export default Index;

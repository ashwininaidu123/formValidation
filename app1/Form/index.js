import React, {Component} from 'react';
import styles from "./styles";
import {
  TouchableOpacity,
  TextInput,
  Text,
  View,
} from 'react-native';
import {Icon} from "native-base";
import Input from '../Input';
import DatePicker from 'react-native-datepicker';

class Form extends Component {
   constructor(props) {
    super(props);
    }

 render(){
     let { 
        isOpen,
        stepOne,
        stepTwo,
        name,
        date,
        amount,
        invoiceName,
        issueDate,
        repaymentDate,
        invoiceAmount,
        errorName,
        errorDate,
        errorAmount,
        errorInvoiceName,
        errorIssueDate,
        errorRepaymentDate,
        errorInvoiceAmount,
        submitted,
        stepTwoVisited,
        formTwoView,
        expandView,
        onAmount,
        onDate,
        onName,
        onInvoiceName,
        onInvoiceAmount,
        onIssueDate,
        onRepaymentDate,
        submitButton,
        butttonOne,
        butttonTwo
     } = this.props;
     return(
        <View style={styles.formContainer}>
            <View  style={styles.formInner}>
              {stepOne && (
              <View style={styles.formOne}> 
                <View style={styles.formHeader}>
                {stepTwoVisited  && (
                  <View>
                  <View style={styles.formHiddenHeader}>
                    <View style={styles.formOneHiddenHeader}>
                      <View>
                        <Text style={styles.formOneHeaderText}>
                          VALUES IN INVOICE FORM
                        </Text>
                      </View>
                      <View>
                        <TouchableOpacity onPress={()=> expandView()}>
                        <Icon
                            style={[styles.icon,{color: '#000'}]}
                            type="MaterialIcons"
                            name={formTwoView ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                        />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  {formTwoView && (
                  <View style={styles.hiddenContent}>
                    <View style={styles.hiddenElement}>
                      <View>
                        <Text style={styles.hiddenElementText}>ISSUE DATE *</Text>
                        <Text>{issueDate?issueDate:''}</Text>
                      </View>
                    </View>
                    <View style={styles.hiddenElement}>
                      <View>
                       <Text style={styles.hiddenElementText}>REPAYMENT DATE *</Text>
                       <Text>{repaymentDate?repaymentDate:''}</Text>
                      </View>
                    </View>
                    <View style={styles.hiddenElement}>
                      <View>
                      <Text style={styles.hiddenElementText}>AMOUNT *</Text>
                      <Text>{invoiceAmount?invoiceAmount:''}</Text>
                      </View>
                    </View>
                  </View>
                  )}
                  </View>
                  )}
                   <View style={styles.formOneHeader}>
                  <Text style={styles.formOneHeaderText}>
                    CREATE A DEAL
                  </Text>
                </View> 
                </View>
              
          
                <View style={styles.formItemsOne}>
                <Input 
                 label="NAME"
                 value={name}
                 onChangeText={onName}
                 error={errorName}
                />
                <View style={styles.formOneItems}>
                  <View style={styles.formOneLabel}>
                  <Text style={styles.formOneLabelText}>
                    DATE *
                  </Text>
                  </View>
                  <View style={styles.formOneInputDate}>
                <DatePicker
                  style={{width: '100%'}}
                  date={date} 
                  mode="date"
                  placeholder=" "
                  customStyles={{
                    dateInput: {
                     borderWidth: 0,
                     padding: 0,
                     alignItems: 'flex-start'
                    }
                    }}
                  format="DD-MM-YYYY"
                  minDate="01-01-2000"
                  maxDate={new Date()}
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={false}
                  onDateChange={(date) => onDate(date)}
                />
                </View>
                  <View style={styles.formOneError}>
                  <Text style={styles.formOneErrorText}>
                   {errorDate ? errorDate  : ""}
                  </Text>
                  </View>
                </View>
                <Input 
                 label="AMOUNT"
                 value={amount}
                 onChangeText={onAmount}
                 error={errorAmount}
                 keyboardType="numeric"
                />
                </View>
                <View style={styles.formOneItemsButton}>
                  <View style={styles.nextButtonContainer}>
                      <View style={[styles.nextButton,{backgroundColor:'#3172D9'}]}>
                        <TouchableOpacity
                            onPress={() => butttonTwo()}
                            style={[styles.next, {backgroundColor:'#3172D9'}]}>
                              <View style={styles.buttonContent}>
                                <Text style={styles.buttonText}>Next</Text>
                                <Icon
                                    style={styles.icon}
                                    type="FontAwesome5"
                                    name="arrow-circle-right"
                                />
                                </View>
                          </TouchableOpacity>
                      </View>
                  </View>
                </View>
              </View>
              )} 
              {stepTwo && (
              <View style={styles.formOne}> 
              <View style={styles.formHeader}>
              <View style={styles.formOneHeader}>
                <Text style={styles.formOneHeaderText}>
                  CREATE AN INVOICE
                </Text>
              </View> 
              </View>
              <View style={styles.formItemsTwo}>
              <Input 
                 label="INVOICE NAME"
                 value={invoiceName}
                 onChangeText={onInvoiceName}
                 error={errorInvoiceName}
                />
              <View style={styles.formOneItems}>
                <View style={styles.formOneLabel}>
                <Text style={styles.formOneLabelText}>
                  ISSUE DATE *
                </Text>
                </View>
                <View style={styles.formOneInputDate}>
                <DatePicker
                  style={{width: '100%'}}
                  date={issueDate} 
                  mode="date" 
                  placeholder=" "
                  customStyles={{
                    dateInput: {
                     borderWidth: 0,
                     padding: 0,
                     alignItems: 'flex-start'
                    }
                    }}
                  format="DD-MM-YYYY"
                  minDate="01-01-2016"
                  maxDate={new Date()}
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={false}
                  iconComponent={<Icon
                    style={styles.icon}
                    size={30}
                    color='#333333' 
                    name='access-time'
                    type="FontAwesome5"
                    name="arrow-circle-right"
                />}
                  onDateChange={(issueDate) => onIssueDate(issueDate)}
                />
                </View>
                <View style={styles.formOneError}>
                <Text style={styles.formOneErrorText}>
                {errorIssueDate ? errorIssueDate  : ""}
                </Text>
                </View>
              </View>
              <View style={styles.formOneItems}>
                <View style={styles.formOneLabel}>
                <Text style={styles.formOneLabelText}>
                  REPAYMENT DATE *
                </Text>
                </View>
                <View style={styles.formOneInputDate}>
                <DatePicker
                  style={{width: '100%'}}
                  date={repaymentDate} 
                  mode="date"
                  placeholder=" "
                  customStyles={{
                    dateInput: {
                     borderWidth: 0,
                     padding: 0,
                     alignItems: 'flex-start'
                    }
                    }}
                  format="DD-MM-YYYY"
                  minDate={new Date(Date.now() + ( 3600 * 1000 * 24))}
                  maxDate="01-01-3000"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={false}
                  iconComponent={<Icon
                    style={styles.icon}
                    size={30}
                    color='#333333' 
                    name='access-time'
                    type="FontAwesome5"
                    name="arrow-circle-right"
                />}
                  onDateChange={(repaymentDate) => onRepaymentDate(repaymentDate)}
                />
                </View>
                <View style={styles.formOneError}>
                <Text style={styles.formOneErrorText}>
                {errorRepaymentDate ? errorRepaymentDate  : ""}
                </Text>
                </View>
              </View>
              <Input 
                 label="AMOUNT"
                 value={invoiceAmount}
                 onChangeText={onInvoiceAmount}
                 error={errorInvoiceAmount}
                 keyboardType="numeric"
                />
              </View>
              {submitted && (
              <View><Text>Form submitted</Text></View>
              )}
              <View style={styles.formOneItemsButton}>
                <View style={styles.nextButtonContainer}>
                    <View style={[styles.nextButton,{backgroundColor:'#3172D9'}]}>
                    <TouchableOpacity
                      onPress={() => submitButton()}
                      style={[styles.next, {backgroundColor:'#3172D9'}]}>
                        <View style={styles.buttonContent}>
                          <Text style={styles.buttonText}>Submit</Text>
                          </View>
                    </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.nextButtonContainer}>
                    <View style={[styles.nextButton,{backgroundColor:'#3172D9'}]}>
                    <TouchableOpacity
                        onPress={() => butttonOne()}
                        style={[styles.next, {backgroundColor:'#3172D9'}]}>
                          <View style={styles.buttonContent}>
                            <Icon
                              style={styles.icon}
                              type="FontAwesome5"
                              name="arrow-circle-left"
                            />
                            <Text style={styles.buttonText}>Previous</Text>
                          </View>
                        </TouchableOpacity>
                    </View>
                </View>
              </View>
            </View>
              )}
            </View>
          </View>
     );
 }
}

export default Form;
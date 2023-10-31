// Create a function testPhoneNumber 
// takes in a phoneNumber string in one of these formats:
// '(206) 333-4444'
// '206-333-4444'
// '206 333 4444'
// Returns true if valid, false if not valid
function testPhoneNumber(phoneNumber) {
    console.log('Input phone number is: ', phoneNumber);
    const regex = new RegExp(`^[(]?[0-9]{3}[)]?[-\s ]?[0-9]{3}[-\s ]?[0-9]{4}$`);
    return regex.test(phoneNumber);
}

// Explanation of RegExp
// ^      start of line
// \(     optional start parenthesis
// \d{3}  exactly 3 digit characters
// \)     optional end parenthesis
// [-\s]  one of a space or a dash
// \d{3}  exactly 3 digit characters
// [-\s]  one of a space or a dash
// \d{4}  exactly 4 digit characters
// $      end of line

// check testPhoneNumber
console.log('Result of regex match to phone number is: ', testPhoneNumber('(206) 333-4444')); // should return true
console.log('Result of regex match to phone number is: ', testPhoneNumber('(206) 33-4444')); // should return false, missing a digit
console.log('Result of regex match to phone number is: ', testPhoneNumber('206-333-4444')); // should return true
console.log('Result of regex match to phone number is: ', testPhoneNumber('206 333 4444')); // should return true

// 1. Create a function parsePhoneNumber that takes in a phoneNumber string 
// in one of the above formats.  For this, you can *assume the phone number
// passed in is correct*.  This should use a regular expression
// and run the exec method to capture the area code and remaining part of
// the phone number.
// Returns an object in the format {areaCode, phoneNumber}
const phoneNumberObj = {
    areaCode: '',
    phoneNumber: ''
};

function parsePhoneNumber(phoneNumber) {
    // Use dynamic regex string based on the inout'd phone number
    let regexStr = '';
    if (phoneNumber.substring(0, 1) === '(') {
        regexStr = /[)]/g;
    } else {
        regexStr = /-/g;
    }

    const regex = new RegExp(regexStr);
    let result = regex.exec(phoneNumber);  // regex exec method
    while (result != null) {
        // Remove leading parentheses for ph.nos with (206) format
        // This will not affect, if there is no leading parentheses
        areaCodeWithParentheses = phoneNumber.substring(0, result.index);
        areaCodeWithoutParentheses = areaCodeWithParentheses.replace('(', '');
        phoneNumberObj.areaCode = areaCodeWithoutParentheses;

        let phNumWithHyphen = phoneNumber.substring(result.index+1);
        let phNumWithoutHyphen = phNumWithHyphen.replace('-', '');
        phoneNumberObj.phoneNumber = phNumWithoutHyphen;
        return phoneNumberObj;
        //result = regex.exec(phoneNumber);
    }
}

// Check parsePhoneNumber
console.log(parsePhoneNumber('206-333-4444'));
// returns {areaCode: '206', phoneNumber: '3334444'}

console.log(parsePhoneNumber('(222) 422-5353'));
// returns {areaCode: '222', phoneNumber: '4225353'}
/*
You are given an integer  followed by  email addresses. Your task is to print a list containing
only valid email addresses inlexicographical order.
Valid email addresses must follow these rules:

It must have the username@websitename.extension format type
The username can only contain letters, digits, dashes and underscores
The website name can only have letters and digits
The extension can only contain letters
The maximum length of the extension is 3
*/

function valid_email(email) {
    let username, website, extension;
    if (email.indexOf("@") === email.lastIndexOf("@") && email.indexOf("@") !== -1)
    {
        username = email.split("@")[0];
        if (email.split("@")[1].indexOf(".") === email.split("@")[1].lastIndexOf(".") && email.split("@")[1].indexOf(".") !== -1)
        {
            website = email.split("@")[1].split(".")[0];
            extension = email.split("@")[1].split(".")[1];
        }
        else{return false}
        // now we check conditions
        // lets start with the username which can only contain letters, digits, underscores and dashes
        function check(x)
        {
            if (x.search(/[a-zA-Z1-9_-]/) === -1) {return false}
            else {return true}
        }
        if (username.length !== Array.from(username).filter(check).length){return false}
        // The website name can only have letters and digits
        if (Array.from(website).filter(check_website).length !== website.length) {return false}
        function check_website(x)
        {
            if (x.search(/[a-zA-Z1-9]/) === -1) {return false}
            else {return true}
        }
        // The extension can only contain letters, and have a maximum length of 3
        if (extension.length > 3) {return false}
        if (Array.from(extension).filter(check_extension).length !== extension.length) {return false}
        function check_extension(x)
        {
            if(x.search(/[a-zA-Z]/) === -1) {return false}
            else{return true}
        }
        return true
    }
    else {return false}
}

/*
input:
dheeraj-234@gmail.com
itsallcrap
harsh_1234@rediff.in
kunal_shin@iop.az
matt23@@india.in

output:
['dheeraj-234@gmail.com', 'harsh_1234@rediff.in', 'kunal_shin@iop.az']
 */
let emails = ["dheeraj-234@gmail.com", "itsallcrap", "harsh_1234@rediff.in", "kunal_shin@iop.az", "matt23@@india.in"];
console.log(emails.filter(valid_email).sort());
emails = ["regex_is_cool@python.org"];
console.log(emails.filter(valid_email).sort());
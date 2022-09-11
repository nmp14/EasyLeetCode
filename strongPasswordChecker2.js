// https://leetcode.com/problems/strong-password-checker-ii/

// A password is said to be strong if it satisfies all the following criteria:

// It has at least 8 characters.
// It contains at least one lowercase letter.
// It contains at least one uppercase letter.
// It contains at least one digit.
// It contains at least one special character. The special characters are the characters in the following string: "!@#$%^&*()-+".
// It does not contain 2 of the same character in adjacent positions (i.e., "aab" violates this condition, but "aba" does not).
// Given a string password, return true if it is a strong password. Otherwise, return false.

var strongPasswordCheckerII = function(password) {
    let hasNum = false;
    let hasSpecChar = false;
    
    if (password === password.toUpperCase() || password === password.toLowerCase() || password.length < 8) return false;
    
    for (let i = 0, len = password.length; i < len; i++) {
        const char = password.charCodeAt(i);
        if (char > 47 && char < 58 && !hasNum) {
            hasNum = true;
        } else if (!hasSpecChar && ["!","@","#","$","%","^","&","*","(",")","-","+"].some(char2 => char2.includes(password[i]))) {
            hasSpecChar = true;
        } else if (hasNum && hasSpecChar) {
            break;
        }
    }
    
    if (checkAdjacentChar(password)) return false;
    
    if (hasNum && hasSpecChar) {
        return true;
    } else {
        return false;
    }
};

const checkAdjacentChar = (password) => {
    for (let i = 0, len = password.length; i < len - 1; i++) {
        if (password[i] === password[i + 1]) {
            return true;
        }
    }
    
    return false;
}


strongPasswordCheckerII("IloveLe3tcode!");
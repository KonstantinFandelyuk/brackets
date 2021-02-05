module.exports = function check(str, bracketsConfig) {
    let chEven;
    let chkEven = true;
    let symbolOpen;
    const stack = [];
    for (let i = 0; i < str.length; i++) {
        const ch = str[i];
        let close = false;
        let open = false;
        let even = false;

        for (let j = 0; j < bracketsConfig.length; j++) {
            if (
                bracketsConfig[j][0] === bracketsConfig[j][1] &&
                ch === bracketsConfig[j][0]
            ) {
                even = true;
                chkEven = !chkEven;
                chEven = ch;
                break;
            }
            if (ch === bracketsConfig[j][0]) {
                open = true;
                break;
            }
            if (ch === bracketsConfig[j][1]) {
                close = true;
                symbolOpen = bracketsConfig[j][0];
                break;
            }
        }
        // debugger;
        if (even) {
            if (!chkEven) {
                stack.push(ch);
            } else if (chkEven && ch === stack[stack.length - 1]) {
                stack.pop();
                chkEven = !chkEven;
            } else {
                stack.push(ch);
                chkEven = !chkEven;
            }
        } else {
            if (open) {
                stack.push(ch);
            } else if (close && symbolOpen === stack[stack.length - 1]) {
                stack.pop();
            } else if (close && stack.length === 0) {
                stack.push(ch);
                break;
            }
        }
    }
    return stack.length === 0;
};

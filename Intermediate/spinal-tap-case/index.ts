/*
Convert a string to spinal case.Spinal
case is all - lowercase - words - joined - by - dashes.
*/

const spinalCase = (str: string)  => {
    

    const newStr = str.replace(/\((._\s+)\)/, "-" );

    return newStr;
};

console.log(spinalCase('This_Is Spinal_Tap'));
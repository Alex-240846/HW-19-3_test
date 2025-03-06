function getLetterOccurrences(string) {
    const rec = {};
    //acc=Array.from(string)
   // for ( let cur in acc){ out[acc[cur]] = out[acc[cur]] ? out[acc[cur]] + 1 : 1};
    for (let cur of Array.from(string)){ rec[cur] = rec[cur] ? rec[cur] + 1 : 1};
    
    return rec;}

     const string = 'hello';   
     reslt=getLetterOccurrences(string);
console.log(reslt);
//TODO update code with reduce callback function as one expression that is with no return statement
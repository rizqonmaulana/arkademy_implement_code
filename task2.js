function reverseSentence (kalimat) {
    if (typeof kalimat !== 'string') { return 'input harus berupa string' }
    let result = ''
    let arrSplit = kalimat.split(' ')
    for(let i=arrSplit.length - 1; i>=0; i--){
      result += arrSplit[i] + ' '
    }
    console.log(result)
  }
  
  reverseSentence("hallo ini adalah javascript")
const palindromCheck = (teks) => {
    if(typeof teks === 'string'){
      let compare = ''
      for(let i = teks.length - 1; i>=0; i--) {
        compare = compare + teks[i]
      }
      
      if (teks.toLocaleLowerCase() === compare.toLocaleLowerCase()){
        return (teks + ' adalah palindrom')
      } else {
        return (teks + ' bukanlah palindrom')
      }
    } else {
      return ("input harus berupa string")
    }
  }
  
  let result  = palindromCheck('Mamam')
  console.log(result)
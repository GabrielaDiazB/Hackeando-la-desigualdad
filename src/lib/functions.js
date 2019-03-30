const searchDataFunction = (data, dataSearch) => {
    let dataCopy = []; // Copia de la data
    let arraySearch = []; // Data en minúsculas
    let newArraySearch = [];
  
    for (let i = 0; i < data.length; i++)
      dataCopy.push(Object.assign({}, data[i]));
  
    for (let i = 0; i < dataCopy.length; i++) {
      arraySearch.push(dataCopy[i].name.toLowerCase());
      if (arraySearch[i].indexOf(dataSearch.toLowerCase()) !== -1) {
        newArraySearch.push(dataCopy[i]);
      }  
    }
    return newArraySearch;
  };
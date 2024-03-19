try {
    
  let response = await fetch(url);
     
  if (!response.ok) {
    throw new Error(` ${response.status}: ${response.statusText}`);
  }
    
  let data = await response.json();

  console.log(data);
} catch (error) {  
  Logger.log('    :', error);
}

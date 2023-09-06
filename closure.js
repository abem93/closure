function sayHello(message){
  return ()=> {
    console.log(`${message}`)
  }
}

const hiWorld = sayHello('hello world');
hiWorld()
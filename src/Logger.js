class Logger {
  constructor(opt){
    this.open = true
    if(opt&&opt.open===false){
      this.open = false
    }
  }
  log(msg){
    if(this.open){
      console.log(msg)
    }
  }
}
export default Logger
class ExtendedDate extends Date {
    getDateText() {
      const months = [
        'січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня',
        'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'
      ];
      const day = this.getDate();
      const month = months[this.getMonth()];
      return `${day} ${month}`;
    }
  
    isFuture() {
      return this.getTime() > Date.now();
    }
  
    isLeapYear() {
      const year = this.getFullYear();
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }
  
    getNextDay() {
      return this.getDate() + 1;
    }
  }
  
  const date = new ExtendedDate('2023-04-18');
  console.log(date.getDateText());
  console.log(date.isFuture()); 
  console.log(date.isLeapYear()); 
  console.log(date.getNextDay());
  
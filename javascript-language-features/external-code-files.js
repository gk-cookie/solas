function printResults() {
  function Car(make, model, transmission) {
    this.make = make;
    this.model = model;
    this.transmission = transmission;
    this.reportStats = reportStats;

    function reportStats() {
      return `Make: ${this.make}, Model: ${this.model}`;
    }
  }
}

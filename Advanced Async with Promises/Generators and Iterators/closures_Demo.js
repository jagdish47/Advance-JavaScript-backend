function DO(task) {
  setTimeout(function () {
    console.log(task);
    /**
     * Closer means -> A function remembers the lexical scope even when the function is out of the scope
     *
     * It remembers that that task coming from the [[scope]] there is clouser from there we are getting that.
     * It remembers the closest value.
     */
  }, 5000);
}

DO("Going to GYM");
